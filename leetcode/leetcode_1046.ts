export function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    for (let i = 0; i < stones.length - 1; i++) {
      if (stones[i] > stones[i + 1]) {
        const temp = stones[i];
        stones[i] = stones[i + 1];
        stones[i + 1] = temp;
      }
    }
    for (let i = 0; i < stones.length - 2; i++) {
      if (stones[i] > stones[i + 1]) {
        const temp = stones[i];
        stones[i] = stones[i + 1];
        stones[i + 1] = temp;
      }
    }
    const k = stones[stones.length - 1] - stones[stones.length - 2];
    stones = stones.slice(0, stones.length - 2);
    if (k != 0) stones.push(k);
  }
  if (stones.length == 0) return 0;
  return stones[0];
}
