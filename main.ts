// Rejected Olympic Sports — entry program (pass 1).
// Writes one funny rejected Olympic sport, a single line,
// to /output/entry.txt.
// The joke: a straight parody of synchronised swimming — the same
// broadcast language (teams of four, perfect unison, judges deducting
// points) — with the sting at the end: in this event, surfacing
// for air is the foul.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Synchronized Drowning: teams of four sink in perfect unison; judges deduct points for anyone who comes up for air.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to ${join(outDir, "entry.txt")}`);
