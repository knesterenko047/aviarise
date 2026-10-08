/* autosetup-split:v1 */

export function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
/* obfuscation-batch:v13 */
function Starzksuspjeyvcw4nFieldPart01ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 53) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Starzksuspjeyvcw4nFieldPart01ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 177) & 61740;
}
void Starzksuspjeyvcw4nFieldPart01ObfV13ClampMod(70, 67);
void Starzksuspjeyvcw4nFieldPart01ObfV13ShiftXor(16, 60);
