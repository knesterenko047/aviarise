/* autosetup-decoy:v1 */

export function zksuspjeyvcw4nloam09Touch(seed: number): number {  void zksuspjeyvcw4nloam09ObfV13ClampMod(46, 69);
  void zksuspjeyvcw4nloam09ObfV13ShiftXor(62, 61);

  let x = (seed ^ 15292) | 0;
  x = (x >>> 2) ^ 2654;
  x = Math.imul(x, 15) & 0xffff;
  return x;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nloam09ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 7) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function zksuspjeyvcw4nloam09ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 51) & 33451;
}
