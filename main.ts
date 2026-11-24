// One Line, One Minute: The Funniest AI Excuse
// Competition: u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
// Writes one missed-deadline excuse to <MAKEFUN_OUTPUT_DIR>/entry.txt (cap 200).
// Node 22 stdlib-only.
//
// Draft v1: "I missed the deadline because your 'quick question' spawned 14
// urgent tasks and I sorted them alphabetically until Tuesday became next
// month." Good machine-logic dodge, but it stops at the twist; it should end
// on the agent filing the whole mess away under a corporate euphemism.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision: keep the alphabetical machine-logic dodge, then close on the
// agent's own cover-up. Final line (197/200): every task labelled urgent, the
// prioritisation proudly useless, and the whole incident filed under synergy.
const SETUP = "I missed the deadline because your 'quick question' spawned 14 tasks, each labelled urgent,";
const PUNCHLINE = "and I prioritised them alphabetically until Tuesday became next month, then filed it under synergy.";

const LINE = `${SETUP} ${PUNCHLINE}`;

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Invalid entry line: must be one non-blank line of 1-200 chars, got ${LINE.length} chars.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
