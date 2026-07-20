import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const imageRoot = path.join(process.cwd(), "public", "images");
const thresholdBytes = 300 * 1024;
const maxLongEdge = 1800;
const quality = 72;
const supportedImage = /\.(webp|jpe?g|png)$/i;

const excludedSegments = [`${path.sep}brand${path.sep}`, `${path.sep}responsive${path.sep}`];

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

const formatKb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;
const relativePath = (filePath) => path.relative(process.cwd(), filePath).replaceAll(path.sep, "/");

const files = walk(imageRoot)
  .filter((filePath) => supportedImage.test(filePath))
  .filter((filePath) => !excludedSegments.some((segment) => filePath.includes(segment)))
  .filter((filePath) => fs.statSync(filePath).size > thresholdBytes)
  .sort((a, b) => fs.statSync(b).size - fs.statSync(a).size);

let totalBefore = 0;
let totalAfter = 0;

for (const sourcePath of files) {
  const before = fs.statSync(sourcePath).size;
  const sourceBuffer = fs.readFileSync(sourcePath);
  const metadata = await sharp(sourceBuffer).metadata();
  const resizeOptions =
    Math.max(metadata.width ?? 0, metadata.height ?? 0) > maxLongEdge
      ? {
          width: (metadata.width ?? 0) >= (metadata.height ?? 0) ? maxLongEdge : undefined,
          height: (metadata.height ?? 0) > (metadata.width ?? 0) ? maxLongEdge : undefined,
          withoutEnlargement: true,
        }
      : undefined;

  const outputPath = `${sourcePath}.optimized`;

  await sharp(sourceBuffer)
    .rotate()
    .resize(resizeOptions)
    .sharpen({ sigma: 0.3, m1: 0.3, m2: 0.9 })
    .webp({ quality, smartSubsample: true, effort: 6 })
    .toFile(outputPath);

  const after = fs.statSync(outputPath).size;
  fs.rmSync(sourcePath);
  fs.renameSync(outputPath, sourcePath);

  const optimizedMetadata = await sharp(sourcePath).metadata();
  totalBefore += before;
  totalAfter += after;

  console.log(
    `${formatKb(before)} -> ${formatKb(after)}  ${optimizedMetadata.width}x${optimizedMetadata.height}  ${relativePath(sourcePath)}`,
  );
}

console.log("");
console.log(`Optimized ${files.length} large images.`);
console.log(`Saved ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)} MB.`);
