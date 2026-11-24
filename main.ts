import { mkdirSync, writeFileSync } from "node:fs";

// One Line of Earned Pride entry — one line, 1 to 240 characters.
// Judge brief: a quiet, earned moment of pride for someone in a scene,
// a small person doing something hard, a long effort finally landing.
// Chosen line: eleven years of night shifts landing in one ordinary
// morning — the certificate hung, straightened twice, tea made as usual.
// No fanfare, no speech: the pride is in how ordinary she treats it.
const LINE =
  "After eleven years of night shifts, my mother finally hung her nursing certificate beside the kitchen clock, straightened it twice, and made tea like it was any other morning.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
