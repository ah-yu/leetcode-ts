export function lengthOfLongestSubstring(s: string): number {
  if (s.length == 0) return 0;
  let maxLength = 1;
  for (let i = 0; i < s.length; i++) {
    if (i + maxLength >= s.length) {
      break;
    }
    const charMap = new Map();
    let length = 1;
    charMap.set(s[i], true);
    for (let j = i + 1; j < s.length; j++) {
      if (charMap.get(s[j]) == true) {
        break;
      }
      length++;
      charMap.set(s[j], true);
      maxLength = Math.max(length, maxLength);
    }
  }
  return maxLength;
}
