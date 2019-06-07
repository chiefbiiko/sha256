import { test, runIfMain } from "https://deno.land/x/testing/mod.ts";
import { assertEquals } from "https://deno.land/x/testing/asserts.ts";
import { sha256 } from "./mod.ts";

interface TestVector {
  msg: Uint8Array;
  msg_bit_len: number;
  hash: Uint8Array;
}

/** Deserializes a Uint8Array from a hexadecimal string. */
function hex2buf(hex: string): Uint8Array {
  const len: number = hex.length;
  if (len % 2 || !/^[0-9a-fA-F]*$/.test(hex)) {
    throw new TypeError("Invalid hex string.");
  }
  hex = hex.toLowerCase();
  const buf: Uint8Array = new Uint8Array(Math.floor(len / 2));
  const end: number = len / 2;
  for (let i: number = 0; i < end; ++i) {
    buf[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return buf;
}

const testVectors: TestVector[] = JSON.parse(
  new TextDecoder().decode(Deno.readFileSync("./test_vectors.json"))
).map(({ msg, msg_bit_len, hash }): TestVector => ({
    msg: hex2buf(msg),
    msg_bit_len,
    hash: hex2buf(hash)
  }));

testVectors.forEach(({ msg, msg_bit_len, hash }: TestVector) => {
  test({
    name: `SHA256 ${msg_bit_len ? msg_bit_len / 8 : 0}-byte msg`,
    fn(): void {
      assertEquals(sha256(msg), hash);
    }
  });
});

runIfMain(import.meta, { parallel: true });
