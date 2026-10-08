/* autosetup-decoy:v1 */

export function zksuspjeyvcw4nbevel08Touch(seed: number): number {  void zksuspjeyvcw4nbevel08ObfV13ClampMod(60, 70);
  void zksuspjeyvcw4nbevel08ObfV13ShiftXor(80, 24);
  void zksuspjeyvcw4nbevel08ObfV13ByteFold('hfjd');
  void zksuspjeyvcw4nbevel08ObfV13HashMix('t9');

  let x = (seed + 56277) | 0;
  x = (x << 1) | 0;
  x = (x ^ 563) & 0xffff;
  return x;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nbevel08ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 25) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function zksuspjeyvcw4nbevel08ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 53) & 64438;
}
function zksuspjeyvcw4nbevel08ObfV13ByteFold(s: string): number {
  let x = 91;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 37;
  return x & 58503;
}
function zksuspjeyvcw4nbevel08ObfV13HashMix(s: string): number {
  let h = 50;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 248;
  return h;
}
