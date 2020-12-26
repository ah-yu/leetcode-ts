import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";
import { lengthOfLongestSubstring } from "./leetcode_03.ts";

Deno.test({
  name: "leetcode 03 solution 1",
  fn: () => {
    assertEquals(lengthOfLongestSubstring("abcabcbb"), 3);
  },
});

Deno.test("leetcode 03 solution 2", () => {
  assertEquals(lengthOfLongestSubstring("bbbbbb"), 1);
});

Deno.test("leetcode 03 soulution 3", () => {
  assertEquals(lengthOfLongestSubstring("pwwkew"), 3);
});
