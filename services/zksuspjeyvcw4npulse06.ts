/* autosetup-decoy:v1 */

export function zksuspjeyvcw4npulse06Touch(seed: number): number {  void zksuspjeyvcw4npulse06ObfV13SumOdds([27, 23, 10]);

  let x = Math.imul(seed | 0, 71);
  x = (x ^ 52536) % 3682;
  if (x < 0) x += 3682;
  return x;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4npulse06ObfV13SumOdds(nums: number[]): number {
  let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 346;
  }
  return acc;
}
