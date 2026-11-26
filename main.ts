// One Line to Your Younger Self — make.fun program entry.
//
// The program writes exactly one line to /output/entry.txt: the line this
// person's older self would send back to their younger self. One sentence,
// two short commands, one concrete year and one concrete object — the kind
// of advice only someone who lived through 2020 at a bad desk could give.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entryText = "Stay home all 2020. Buy the good chair.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entryText, "utf8");
