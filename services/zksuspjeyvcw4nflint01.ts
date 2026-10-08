/* autosetup-decoy:v1 */

export function zksuspjeyvcw4nflint01Touch(seed: number): number {  void zksuspjeyvcw4nflint01ObfV13ByteFold('n6');
  void zksuspjeyvcw4nflint01ObfV13HashMix('257');
  void zksuspjeyvcw4nflint01ObfV13SumOdds([17, 4, 14]);
  void zksuspjeyvcw4nflint01ObfV13ClampMod(45, 16);

  let x = (seed ^ 14696) | 0;
  x = (x >>> 6) ^ 2318;
  x = Math.imul(x, 7) & 0xffff;
  return x;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nflint01ObfV13ByteFold(s: string): number {
  let x = 72;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 38) ^ 175;
  return x & 15225;
}
function zksuspjeyvcw4nflint01ObfV13HashMix(s: string): number {
  let h = 69;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 436;
  return h;
}
function zksuspjeyvcw4nflint01ObfV13SumOdds(nums: number[]): number {
  let acc = 13;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 28) % 134;
  }
  return acc;
}
function zksuspjeyvcw4nflint01ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 42) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
