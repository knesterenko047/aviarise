/* autosetup-split:v1 */

export function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
/* obfuscation-batch:v13 */
function Dockzksuspjeyvcw4nNodePart01ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 65) & 18895;
}
void Dockzksuspjeyvcw4nNodePart01ObfV13ShiftXor(21, 3);
