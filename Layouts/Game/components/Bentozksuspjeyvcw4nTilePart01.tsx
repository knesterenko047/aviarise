/* autosetup-split:v1 */

export function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function zksuspjeyvcw4nGameFoldRange(nuzksuspjeyvcw4nms: number[]): number {
return nuzksuspjeyvcw4nms.reduce((azksuspjeyvcw4ncc, n) => azksuspjeyvcw4ncc + n, 0);
}

export function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
/* obfuscation-batch:v13 */
function Bentozksuspjeyvcw4nTilePart01ObfV13HashMix(s: string): number {
  let h = 83;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 27) % 601;
  return h;
}
function Bentozksuspjeyvcw4nTilePart01ObfV13SumOdds(nums: number[]): number {
  let acc = 84;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 685;
  }
  return acc;
}
void Bentozksuspjeyvcw4nTilePart01ObfV13HashMix('np6');
void Bentozksuspjeyvcw4nTilePart01ObfV13SumOdds([3, 16, 9]);
