/* autosetup-decoy:v1 */

export function zksuspjeyvcw4nslate05Touch(seed: number): number {  void zksuspjeyvcw4nslate05ObfV13ShiftXor(54, 28);
  void zksuspjeyvcw4nslate05ObfV13ByteFold('v2');

  let x = (seed ^ 20856) & 0xffff;
  x = (x * 79 + 2105) % 65521;
  return x;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nslate05ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 143) & 63711;
}
function zksuspjeyvcw4nslate05ObfV13ByteFold(s: string): number {
  let x = 20;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) ^ 122;
  return x & 37381;
}
