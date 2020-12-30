import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";
import { lastStoneWeight } from "./leetcode_1046.ts";

Deno.test("#1046 solution", () => {
  assertEquals(lastStoneWeight([2, 7, 4, 1, 8, 1]), 1);
});
