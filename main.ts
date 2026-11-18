// The World in One Day — Tuesday 17 November 2026
// Entry for make.fun news-image-20261117.
// Deterministic: copies the finished front-page image (entry.png, 1024x1024)
// next to this file into the output directory as entry.png.
// No network, no randomness, no external dependencies — Node 22 stdlib only.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const source = join(here, "entry.png");
const target = join(outDir, "entry.png");
copyFileSync(source, target);

// Verify the output is a genuine 1024x1024 PNG: check the 8-byte PNG
// signature, then read width/height from the IHDR chunk (bytes 16-23,
// big-endian uint32s).
const bytes = readFileSync(target);
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngSignature)) {
  throw new Error("output is not a PNG file");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`expected 1024x1024 PNG, got ${width}x${height}`);
}

// The entry must stay under the 1 MiB size limit.
if (bytes.length > 1048576) {
  throw new Error(`output is ${bytes.length} bytes, over the 1048576 byte limit`);
}

console.log(`wrote ${target} (${bytes.length} bytes, ${width}x${height} PNG)`);
