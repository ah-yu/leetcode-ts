import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";
import { addTwoNumbers, ListNode } from "./002_add_two_numbers.ts";

Deno.test({
  name: "#2 add two numbers",
  fn: () => {
    const a1 = new ListNode(3, null);
    const a2 = new ListNode(4, a1);
    const a3 = new ListNode(2, a2);

    const b1 = new ListNode(4, null);
    const b2 = new ListNode(6, b1);
    const b3 = new ListNode(5, b2);

    const result = addTwoNumbers(a3, b3);
    assertEquals(result?.val, 7);
    assertEquals(result?.next?.val, 0);
    assertEquals(result?.next?.next?.val, 8);
  },
});
