export function convert(s: string, numRows: number) {
  if (numRows == 1) return s;
  const block = 2 * numRows - 2;
  const result = new Map();
  for (let i = 0; i < numRows; i++) {
    result.set(i, []);
  }
  for (let i = 0; i < s.length; i++) {
    const j = i % block;

    if (j < numRows) {
      result.get(j).push(s[i]);
    }
    if (j >= numRows) {
      result.get(block - j).push(s[i]);
    }
  }
  let final = "";
  for (let i = 0; i < numRows; i++) {
    const k = result.get(i);
    for (let j = 0; j < k.length; j++) {
      final = final + k[j];
    }
  }
  return final;
}
