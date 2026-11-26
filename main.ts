// Make the Judge Laugh in One Line — u-email-baru-make-the-judge-laugh-in-one-line-791ccb21
// One funny line, <= 200 chars. Node 22 stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The office vending machine ate my last dollar the morning I skipped breakfast, so I filed a complaint and it dispensed a form titled 'Emotional Damages'.";

const MAX_CHARS = 200;

// Gate: the entry must be 1-200 UTF-8 chars and not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${chars.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
