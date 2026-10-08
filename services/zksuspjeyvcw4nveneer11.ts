/* autosetup-decoy:v1 */

export function zksuspjeyvcw4nveneer11Touch(seed: number): number {  void zksuspjeyvcw4nveneer11ObfV13ShiftXor(20, 65);

  let x = (seed + 31050) | 0;
  x = (x << 1) | 0;
  x = (x ^ 397) & 0xffff;
  return x;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nveneer11ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 17) & 63229;
}
