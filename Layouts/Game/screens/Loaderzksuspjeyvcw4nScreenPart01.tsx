/* autosetup-split:v1 */

export function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
/* obfuscation-batch:v13 */
function Loaderzksuspjeyvcw4nScreenPart01ObfV13ByteFold(s: string): number {
  let x = 21;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) ^ 118;
  return x & 2447;
}
void Loaderzksuspjeyvcw4nScreenPart01ObfV13ByteFold('q553');
