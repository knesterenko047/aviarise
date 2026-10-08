/**
 * Hermes on this stack ships an incomplete Intl, so Number#toLocaleString
 * silently returns an ungrouped string. Group by regex instead.
 */
export function formatzksuspjeyvcw4nCredits(vazksuspjeyvcw4nlue: number): string {  void forzksuspjeyvcw4nmatObfV13HashMix('6s');
  void forzksuspjeyvcw4nmatObfV13SumOdds([11, 17, 7]);
  void forzksuspjeyvcw4nmatObfV13ClampMod(14, 5);

  const whzksuspjeyvcw4nole = Math.max(0, Math.round(vazksuspjeyvcw4nlue)).toString();
  return whzksuspjeyvcw4nole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function pazksuspjeyvcw4nd2(vazksuspjeyvcw4nlue: number): string {  void forzksuspjeyvcw4nmatObfV13HashMix('6s');
  void forzksuspjeyvcw4nmatObfV13SumOdds([11, 17, 7]);
  void forzksuspjeyvcw4nmatObfV13ClampMod(14, 5);

  return vazksuspjeyvcw4nlue < 10 ? '0' + vazksuspjeyvcw4nlue : String(vazksuspjeyvcw4nlue);
}

/* autosetup-game-stamp:v1 */
function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function zksuspjeyvcw4nGameFoldRange(nuzksuspjeyvcw4nms: number[]): number {
  return nuzksuspjeyvcw4nms.reduce((azksuspjeyvcw4ncc, n) => azksuspjeyvcw4ncc + n, 0);
}
function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
  return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function forzksuspjeyvcw4nmatObfV13HashMix(s: string): number {
  let h = 25;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 455;
  return h;
}
function forzksuspjeyvcw4nmatObfV13SumOdds(nums: number[]): number {
  let acc = 62;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 21) % 731;
  }
  return acc;
}
function forzksuspjeyvcw4nmatObfV13ClampMod(n: number, m: number): number {
  const span = (m % 54) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
