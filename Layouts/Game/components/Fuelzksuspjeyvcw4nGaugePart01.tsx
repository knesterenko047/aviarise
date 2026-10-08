/* autosetup-split:v1 */

export function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
/* obfuscation-batch:v13 */
function Fuelzksuspjeyvcw4nGaugePart01ObfV13SumOdds(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 312;
  }
  return acc;
}
function Fuelzksuspjeyvcw4nGaugePart01ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 22) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Fuelzksuspjeyvcw4nGaugePart01ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 148) & 64901;
}
void Fuelzksuspjeyvcw4nGaugePart01ObfV13SumOdds([14, 8, 28]);
void Fuelzksuspjeyvcw4nGaugePart01ObfV13ClampMod(37, 61);
void Fuelzksuspjeyvcw4nGaugePart01ObfV13ShiftXor(21, 28);
