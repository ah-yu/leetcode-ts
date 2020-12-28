export function longestPalindrome(s: string): string {
  const dp: boolean[][] = new Array(s.length).fill([]).map(() =>
    new Array(s.length).fill(false)
  );
  let result = "";
  for (let l = 0; l < s.length; l++) {
    for (let i = 0; i < s.length; i++) {
      if (l == 0) {
        dp[i][i] = true;
      } else if (l == 1) {
        dp[i][i + 1] = s[i] === s[i + 1];
      } else {
        dp[i][i + l] = (s[i] === s[i + l]) && dp[i + 1][i + l - 1];
      }

      if (dp[i][i + l] && (l + 1 > result.length)) {
        result = s.substring(i, i + l + 1);
      }
    }
  }
  return result;
}
