// The One-Line Laugh — writes a single funny line to /output/entry.txt.
// The line must be one sentence, 1-200 characters, standing alone.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my AI assistant I'm feeling down, and it suggested I turn myself off and on again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The gate wants 1-200 characters of UTF-8 text, not only white space.
// Fail loudly here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("line is only white space");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} characters)`);
