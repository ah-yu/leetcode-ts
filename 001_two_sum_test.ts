import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { twoSum } from "./001_two_sum.ts";

Deno.test("#1 two sum_soulution", () => {
  assertEquals([0, 1], twoSum([2, 7, 11, 15], 9));
});
