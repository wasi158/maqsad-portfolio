import { rmSync } from "node:fs";
import { resolve } from "node:path";

const nextDir = resolve(process.cwd(), ".next");

try {
  rmSync(nextDir, { recursive: true, force: true });
  console.log("Removed .next cache");
} catch (err) {
  console.error(
    "Could not remove .next — stop all `npm run dev` terminals first, then retry.",
  );
  console.error(err.message);
  process.exit(1);
}
