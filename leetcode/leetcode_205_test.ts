import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";
import { isIsomorphic } from "./leetcode_205.ts";

Deno.test("#205 solution", () => {
  assertEquals(isIsomorphic("egg", "add"), true);
  assertEquals(isIsomorphic("foo", "bar"), false);
  assertEquals(isIsomorphic("paper", "title"), true);
});
