/* autosetup-split:v1 */

export function zksuspjeyvcw4nGameFoldRange(nuzksuspjeyvcw4nms: number[]): number {
return nuzksuspjeyvcw4nms.reduce((azksuspjeyvcw4ncc, n) => azksuspjeyvcw4ncc + n, 0);
}
/* obfuscation-batch:v13 */
function Resultzksuspjeyvcw4nScreenPart02ObfV13HashMix(s: string): number {
  let h = 29;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 703;
  return h;
}
function Resultzksuspjeyvcw4nScreenPart02ObfV13SumOdds(nums: number[]): number {
  let acc = 39;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 191;
  }
  return acc;
}
function Resultzksuspjeyvcw4nScreenPart02ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 18) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Resultzksuspjeyvcw4nScreenPart02ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 53) & 47634;
}
void Resultzksuspjeyvcw4nScreenPart02ObfV13HashMix('s59k');
void Resultzksuspjeyvcw4nScreenPart02ObfV13SumOdds([10, 7, 24]);
void Resultzksuspjeyvcw4nScreenPart02ObfV13ClampMod(72, 66);
void Resultzksuspjeyvcw4nScreenPart02ObfV13ShiftXor(72, 64);
