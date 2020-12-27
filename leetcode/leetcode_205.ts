export function isIsomorphic(s: string, t: string): boolean {
  return fn(s, t) && fn(t, s);
}

const fn = (s: string, t: string) => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], t[i]);
      continue;
    }
    if (map.get(s[i]) == t[i]) {
      continue;
    }
    return false;
  }
  return true;
};
