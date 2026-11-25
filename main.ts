import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "One Line of Earned Pride".
// One line, 1 to 240 characters. A quiet, earned moment of pride
// for someone in a scene: a small person doing something hard, a
// long effort finally landing. Sixty years of mending nets landing
// in one held-up net: the last knot pulled tight, the net held to
// the light, and no hole left to find. No fanfare, no speech: the
// pride is in the test passing, and that is the whole point. The
// fisherman does not say he is proud; the net says it for him.
const MAX_CHARS = 240;
const MESSAGE =
  "After sixty years of mending nets, the old fisherman pulled the last knot tight, held the net up to the light, and saw no hole left to find.";

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
