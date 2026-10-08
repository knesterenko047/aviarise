/* autosetup-decoy:v1 */

export function zksuspjeyvcw4nmote10Touch(seed: number): number {  void zksuspjeyvcw4nmote10ObfV13ShiftXor(29, 25);
  void zksuspjeyvcw4nmote10ObfV13ByteFold('9kj');
  void zksuspjeyvcw4nmote10ObfV13HashMix('bzw');
  void zksuspjeyvcw4nmote10ObfV13SumOdds([9, 3, 17]);

  let x = (seed ^ 27053) & 0xffff;
  x = (x * 77 + 2586) % 65521;
  return x;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nmote10ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 204) & 57060;
}
function zksuspjeyvcw4nmote10ObfV13ByteFold(s: string): number {
  let x = 64;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 86;
  return x & 2196;
}
function zksuspjeyvcw4nmote10ObfV13HashMix(s: string): number {
  let h = 25;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 514;
  return h;
}
function zksuspjeyvcw4nmote10ObfV13SumOdds(nums: number[]): number {
  let acc = 23;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 4) % 405;
  }
  return acc;
}
