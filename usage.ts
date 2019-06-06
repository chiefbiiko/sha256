import { SHA256 } from "./mod.ts";

const hash: Uint8Array = new SHA256().update("").digest();
console.log(`hash of "" using a SHA256 instance: ${hash}`);
console.log(`hash of "" using SHA256.hash: ${SHA256.hash("")}`);
