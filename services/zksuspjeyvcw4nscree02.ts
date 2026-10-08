/* autosetup-decoy:v1 */

export function zksuspjeyvcw4nscree02Touch(seed: number): number {  void zksuspjeyvcw4nscree02ObfV13ShiftXor(61, 46);
  void zksuspjeyvcw4nscree02ObfV13ByteFold('g67m');
  void zksuspjeyvcw4nscree02ObfV13HashMix('5p');
  void zksuspjeyvcw4nscree02ObfV13SumOdds([3, 27, 13]);

  let x = (seed ^ 9419) | 0;
  x = (x >>> 6) ^ 983;
  x = Math.imul(x, 57) & 0xffff;
  return x;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nscree02ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 157) & 64726;
}
function zksuspjeyvcw4nscree02ObfV13ByteFold(s: string): number {
  let x = 84;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 143;
  return x & 694;
}
function zksuspjeyvcw4nscree02ObfV13HashMix(s: string): number {
  let h = 85;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 7) % 680;
  return h;
}
function zksuspjeyvcw4nscree02ObfV13SumOdds(nums: number[]): number {
  let acc = 16;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 3) % 698;
  }
  return acc;
}
