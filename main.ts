// Entry for "The Long Roast: Lawmakers and the File They Cannot Convert"
// (make.fun bounty u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
//
// The program writes a single satirical sentence to /output/entry.txt.
// The sentence roasts lawmakers who would regulate AI, crypto or the
// internet but cannot convert a file to PDF. It is judged on bite, aim
// and freshness, so the line sets up the lawmakers' authority first and
// undercuts it with the one file they cannot convert, landing the punch
// on the last few words.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, at most 200 characters, one line, no trailing
// whitespace. The committee writes the rules for AI; it cannot find the
// button that turns its own bill into a PDF. "Called a recess" keeps the
// setup tight and lets the punch — their own bill, a PDF — land last.
const ENTRY =
  "The committee writing the rules for artificial intelligence just called a recess because nobody in the room could find the button that turns their own bill into a PDF.";

// The gate requires 1 to 320 characters of UTF-8 text, not only
// whitespace, in a single sentence. Enforce the stricter 200-character
// limit the bounty task states, and fail loudly instead of writing a
// line the gate would refuse.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const sentences = text.split(/[.!?]+/).filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`entry must be one sentence, got ${sentences.length}`);
  }
}

function main(): void {
  validateEntry(ENTRY);

  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  // Clear only the files inside the output directory, never the
  // directory itself: the grader mounts /output and runs as an
  // unprivileged user, so removing it would fail with EBUSY/EACCES.
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
  console.log(ENTRY);
}

main();
