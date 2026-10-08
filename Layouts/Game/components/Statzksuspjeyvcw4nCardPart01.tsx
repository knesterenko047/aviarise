/* autosetup-split:v1 */

export function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
/* obfuscation-batch:v13 */
function Statzksuspjeyvcw4nCardPart01ObfV13ByteFold(s: string): number {
  let x = 18;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 212;
  return x & 53433;
}
function Statzksuspjeyvcw4nCardPart01ObfV13HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 223;
  return h;
}
function Statzksuspjeyvcw4nCardPart01ObfV13SumOdds(nums: number[]): number {
  let acc = 5;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 799;
  }
  return acc;
}
function Statzksuspjeyvcw4nCardPart01ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 50) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void Statzksuspjeyvcw4nCardPart01ObfV13ByteFold('w4');
void Statzksuspjeyvcw4nCardPart01ObfV13HashMix('wnj3');
void Statzksuspjeyvcw4nCardPart01ObfV13SumOdds([30, 10, 23]);
void Statzksuspjeyvcw4nCardPart01ObfV13ClampMod(6, 68);
