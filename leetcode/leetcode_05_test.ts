import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.82.0/testing/asserts.ts";
import { longestPalindrome } from "./leetcode_05.ts";

Deno.test("#5 solution", () => {
  assertEquals(longestPalindrome("cbbd"), "bb");
});
