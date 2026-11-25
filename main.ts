import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "One Line of Earned Pride".
// One line, 1 to 240 characters. A quiet, earned moment of pride
// for someone in a scene: a small person doing something hard, a
// long effort finally landing. Eleven years of night shifts landing
// in one ordinary morning — the certificate hung, straightened
// twice, tea made as usual. No fanfare, no speech: the pride is
// in how ordinary she treats it, and that is the whole point.
const MAX_CHARS = 240;
const MESSAGE =
  "After eleven years of night shifts, my mother finally hung her nursing certificate beside the kitchen clock, straightened it twice, and made tea like it was any other morning.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
