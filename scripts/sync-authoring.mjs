import fs from "fs";
import path from "path";

const __dirname = process.cwd();

// 1) Allow override via environment variable
//    Example:
//      - Windows: set CSPARKS_AUTHORING_ROOT=C:\path\to\csparks-authoring && npm run sync:authoring
//      - macOS/Linux: CSPARKS_AUTHORING_ROOT=/Users/you/csparks-authoring npm run sync:authoring
//
// 2) Fallback: assume a sibling folder "../csparks-authoring"
const authoringRoot = process.env.CSPARKS_AUTHORING_ROOT
  ? path.resolve(process.env.CSPARKS_AUTHORING_ROOT)
  : path.resolve(__dirname, "../csparks-authoring");

const siteContentRoot = path.resolve(__dirname, "src/content");

// The collections we want to sync
const collections = ["patterns", "forces", "stories"];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyCollection(collection) {
  const fromDir = path.join(authoringRoot, collection);
  const toDir = path.join(siteContentRoot, collection);

  if (!fs.exists(fromDir) && !fs.existsSync(fromDir)) {
    console.warn(
      `[sync-authoring] Skipping "${collection}" – source folder not found at ${fromDir}`
    );
    return;
  }

  ensureDir(toDir);

  const files = fs
    .readdirSync(fromDir)
    .filter((f) => f.toLowerCase().endsWith(".md") || f.toLowerCase().endsWith(".mdx"));

  if (files.length === 0) {
    console.warn(`[sync-authoring] No .md/.mdx files found in ${fromDir}`);
  }

  for (const file of files) {
    const srcPath = path.join(fromDir, file);
    const destPath = path.join(toDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`[sync-authoring] Copied ${collection}/${file}`);
  }
}

console.log("[sync-authoring] Authoring root:", authoringRoot);
console.log("[sync-authoring] Site content root:", siteContentRoot);
console.log("[sync-authoring] Syncing collections:", collections.join(", "));

for (const collection of collections) {
  copyCollection(collection);
}

console.log("[sync-authoring] Sync complete.");
