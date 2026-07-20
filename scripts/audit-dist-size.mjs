import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const strict = process.argv.includes("--strict");

const budgets = {
  totalBytes: 25 * 1024 * 1024,
  largestImageBytes: 500 * 1024,
  largeImageBytes: 300 * 1024,
  jsGzipBytes: 80 * 1024,
  cssGzipBytes: 50 * 1024,
};

const imageExtensions = new Set([".avif", ".gif", ".jpg", ".jpeg", ".png", ".svg", ".webp"]);
const gzipExtensions = new Set([".css", ".html", ".js", ".json", ".txt", ".webmanifest", ".xml"]);

const formatBytes = (bytes) => {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  return `${(bytes / 1024).toFixed(1)} KB`;
};

const relativePath = (filePath) => path.relative(rootDir, filePath).replaceAll(path.sep, "/");

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(filePath));
      continue;
    }

    if (entry.isFile()) {
      files.push(filePath);
    }
  }

  return files;
};

if (!fs.existsSync(distDir)) {
  console.error("dist directory not found. Run `npm run build` before `npm run audit:dist`.");
  process.exit(1);
}

const files = walk(distDir).map((filePath) => {
  const buffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase() || "(none)";
  const gzipBytes = gzipExtensions.has(ext) ? zlib.gzipSync(buffer, { level: 9 }).length : null;

  return {
    path: filePath,
    relative: relativePath(filePath),
    name: path.basename(filePath).toLowerCase(),
    ext,
    bytes: buffer.length,
    gzipBytes,
    isImage: imageExtensions.has(ext),
  };
});

const totals = files.reduce(
  (result, file) => {
    result.bytes += file.bytes;
    result.count += 1;
    return result;
  },
  { bytes: 0, count: 0 },
);

const byExtension = new Map();
const byBaseName = new Map();

for (const file of files) {
  const current = byExtension.get(file.ext) ?? { count: 0, bytes: 0, gzipBytes: 0 };
  current.count += 1;
  current.bytes += file.bytes;
  current.gzipBytes += file.gzipBytes ?? 0;
  byExtension.set(file.ext, current);

  if (file.isImage) {
    const duplicate = byBaseName.get(file.name) ?? { count: 0, bytes: 0, files: [] };
    duplicate.count += 1;
    duplicate.bytes += file.bytes;
    duplicate.files.push(file.relative);
    byBaseName.set(file.name, duplicate);
  }
}

const extensionRows = [...byExtension.entries()]
  .map(([ext, value]) => ({ ext, ...value }))
  .sort((a, b) => b.bytes - a.bytes);

const largestFiles = [...files].sort((a, b) => b.bytes - a.bytes).slice(0, 20);
const largestImages = files
  .filter((file) => file.isImage)
  .sort((a, b) => b.bytes - a.bytes)
  .slice(0, 20);
const largeImages = files
  .filter((file) => file.isImage && file.bytes > budgets.largeImageBytes)
  .sort((a, b) => b.bytes - a.bytes);
const duplicateImages = [...byBaseName.entries()]
  .filter(([, value]) => value.count > 1)
  .map(([name, value]) => ({ name, ...value }))
  .sort((a, b) => b.bytes - a.bytes)
  .slice(0, 20);
const htmlFiles = files.filter((file) => file.ext === ".html");
const imageReferences = new Set();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file.path, "utf8");

  for (const match of html.matchAll(/(?:src|href|srcset)=["']([^"']+)["']/g)) {
    const value = match[1];
    const references = value.includes(",")
      ? value.split(",").map((item) => item.trim().split(/\s+/)[0])
      : [value];

    for (const reference of references) {
      if (reference.startsWith("/images/")) {
        imageReferences.add(reference);
      }
    }
  }
}

const missingImageReferences = [...imageReferences].filter((reference) => {
  const publicPath = reference.replace(/^\//, "");

  return !fs.existsSync(path.join(distDir, publicPath));
});

const jsGzipBytes = files
  .filter((file) => file.ext === ".js")
  .reduce((total, file) => total + (file.gzipBytes ?? 0), 0);
const cssGzipBytes = files
  .filter((file) => file.ext === ".css")
  .reduce((total, file) => total + (file.gzipBytes ?? 0), 0);
const largestImage = largestImages[0];

const checks = [
  {
    label: "Total dist size",
    current: totals.bytes,
    budget: budgets.totalBytes,
    pass: totals.bytes <= budgets.totalBytes,
  },
  {
    label: "Largest image",
    current: largestImage?.bytes ?? 0,
    budget: budgets.largestImageBytes,
    pass: (largestImage?.bytes ?? 0) <= budgets.largestImageBytes,
  },
  {
    label: "JS gzip total",
    current: jsGzipBytes,
    budget: budgets.jsGzipBytes,
    pass: jsGzipBytes <= budgets.jsGzipBytes,
  },
  {
    label: "CSS gzip total",
    current: cssGzipBytes,
    budget: budgets.cssGzipBytes,
    pass: cssGzipBytes <= budgets.cssGzipBytes,
  },
];

console.log("Dist Size Audit");
console.log("================");
console.log(`Files: ${totals.count}`);
console.log(`Total: ${formatBytes(totals.bytes)}`);
console.log("");

console.log("Budgets");
console.log("-------");
for (const check of checks) {
  const mark = check.pass ? "PASS" : "WARN";
  console.log(`${mark} ${check.label}: ${formatBytes(check.current)} / ${formatBytes(check.budget)}`);
}
console.log("");

console.log("By Extension");
console.log("------------");
for (const row of extensionRows) {
  const gzip = row.gzipBytes > 0 ? `, gzip ${formatBytes(row.gzipBytes)}` : "";
  console.log(`${row.ext}: ${row.count} files, ${formatBytes(row.bytes)}${gzip}`);
}
console.log("");

console.log("Largest Files");
console.log("-------------");
for (const file of largestFiles) {
  console.log(`${formatBytes(file.bytes)}  ${file.relative}`);
}
console.log("");

console.log(`Images Over ${formatBytes(budgets.largeImageBytes)}`);
console.log("----------------");
for (const file of largeImages.slice(0, 30)) {
  console.log(`${formatBytes(file.bytes)}  ${file.relative}`);
}
if (largeImages.length > 30) {
  console.log(`...and ${largeImages.length - 30} more`);
}
console.log("");

console.log("Duplicate Image Names");
console.log("---------------------");
for (const item of duplicateImages) {
  console.log(`${item.count} copies, ${formatBytes(item.bytes)} total  ${item.name}`);
  for (const file of item.files.slice(0, 4)) {
    console.log(`  - ${file}`);
  }
  if (item.files.length > 4) {
    console.log(`  - ...and ${item.files.length - 4} more`);
  }
}
console.log("");

console.log("Image Reference Check");
console.log("---------------------");
console.log(`HTML image references: ${imageReferences.size}`);
if (missingImageReferences.length === 0) {
  console.log("PASS Missing image references: 0");
} else {
  console.log(`FAIL Missing image references: ${missingImageReferences.length}`);
  for (const reference of missingImageReferences.slice(0, 40)) {
    console.log(`  - ${reference}`);
  }
}

const failedChecks = checks.filter((check) => !check.pass);

if (missingImageReferences.length > 0) {
  console.error("");
  console.error("Image reference audit failed: one or more /images assets are missing from dist.");
  process.exit(1);
}

if (strict && failedChecks.length > 0) {
  console.error("");
  console.error(`Strict audit failed: ${failedChecks.length} budget check(s) exceeded.`);
  process.exit(1);
}
