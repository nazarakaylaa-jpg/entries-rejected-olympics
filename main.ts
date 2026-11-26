// Rejected Olympic Sports — entry program (pass 2, final).
// Writes one funny rejected Olympic sport, a single line,
// to /output/entry.txt.
// The joke: a straight parody of synchronised swimming — the same
// broadcast language (eight athletes, perfect unison, the gold) —
// with the sting at the end: in this event, the win condition is
// staying underwater longest. Pass 2 tightens pass 1 by replacing
// the procedural "judges deduct points" sting with the prize itself:
// gold goes to the team that stays down longest.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Synchronized Drowning: eight athletes sink in perfect unison; the gold goes to the team that stays down longest.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to ${join(outDir, "entry.txt")}`);
