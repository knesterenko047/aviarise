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
function routezksuspjeyvcw4nEnginePart01ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 31) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function routezksuspjeyvcw4nEnginePart01ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 166) & 55254;
}
function routezksuspjeyvcw4nEnginePart01ObfV13ByteFold(s: string): number {
  let x = 59;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) ^ 236;
  return x & 64621;
}
void routezksuspjeyvcw4nEnginePart01ObfV13ClampMod(42, 49);
void routezksuspjeyvcw4nEnginePart01ObfV13ShiftXor(17, 68);
void routezksuspjeyvcw4nEnginePart01ObfV13ByteFold('2m');
