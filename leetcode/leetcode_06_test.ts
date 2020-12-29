import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";
import { convert } from "./leetcode_06.ts";

Deno.test("#6 solutions", () => {
  assertEquals(convert("LEETCODEISHIRING", 3), "LCIRETOESIIGEDHN");
  assertEquals(convert("LEETCODEISHIRING", 4), "LDREOEIIECIHNTSG");
});
