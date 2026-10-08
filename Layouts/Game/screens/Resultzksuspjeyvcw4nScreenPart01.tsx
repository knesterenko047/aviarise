/* autosetup-split:v1 */

export function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
/* obfuscation-batch:v13 */
function Resultzksuspjeyvcw4nScreenPart01ObfV13ByteFold(s: string): number {
  let x = 37;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 202;
  return x & 53464;
}
function Resultzksuspjeyvcw4nScreenPart01ObfV13HashMix(s: string): number {
  let h = 67;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 42) % 125;
  return h;
}
function Resultzksuspjeyvcw4nScreenPart01ObfV13SumOdds(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 8) % 490;
  }
  return acc;
}
void Resultzksuspjeyvcw4nScreenPart01ObfV13ByteFold('45z');
void Resultzksuspjeyvcw4nScreenPart01ObfV13HashMix('npj');
void Resultzksuspjeyvcw4nScreenPart01ObfV13SumOdds([22, 20, 18]);
