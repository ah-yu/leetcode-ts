export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0;
  const head = new ListNode();
  let temp = head;
  while (l1 || l2) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;
    const sum = val1 + val2 + carry;
    carry = (sum >= 10) ? 1 : 0;
    temp.next = new ListNode(sum % 10, null);
    temp = temp.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }
  if (carry == 1) {
    temp.next = new ListNode(1);
  }
  return head.next;
}
