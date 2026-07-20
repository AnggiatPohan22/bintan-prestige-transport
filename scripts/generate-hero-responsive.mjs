import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const heroRoot = path.join(process.cwd(), "public", "images", "hero");
const variants = [
  { suffix: "mobile", width: 960, height: 1706, quality: 78 },
  { suffix: "tablet", width: 1280, height: 960, quality: 78 },
  { suffix: "desktop", width: 1760, height: 990, quality: 80 },
];

const supportedImage = /\.(webp|jpe?g|png)$/i;

let generated = 0;

for (const page of fs.readdirSync(heroRoot)) {
  const pageDir = path.join(heroRoot, page);

  if (!fs.statSync(pageDir).isDirectory() || page === "responsive") {
    continue;
  }

  const outputDir = path.join(pageDir, "responsive");
  fs.mkdirSync(outputDir, { recursive: true });

  for (const file of fs.readdirSync(pageDir)) {
    const sourcePath = path.join(pageDir, file);

    if (!fs.statSync(sourcePath).isFile() || !supportedImage.test(file)) {
      continue;
    }

    const baseName = file.replace(/\.[^.]+$/, "");

    for (const variant of variants) {
      const outputPath = path.join(outputDir, `${baseName}-${variant.suffix}.webp`);

      await sharp(sourcePath)
        .rotate()
        .resize(variant.width, variant.height, {
          fit: "cover",
          position: "attention",
          kernel: "lanczos3",
        })
        .sharpen({ sigma: 0.45, m1: 0.45, m2: 1.15 })
        .webp({ quality: variant.quality, smartSubsample: true, effort: 6 })
        .toFile(outputPath);

      generated += 1;
    }
  }
}

console.log(`Generated ${generated} responsive hero images.`);
