// Two Lines to Your Past Self — make.fun entry
// Writes the exact 2-line entry to /output/entry.txt (or $ENTRY_OUTPUT).
// Node 22 stdlib only — no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Don't lend him your car on Friday.\n" +
  "He brings it back with an empty tank and a dent you only spot on Monday, and after that you never lend anyone anything again.\n";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} chars to ${outPath}`);
