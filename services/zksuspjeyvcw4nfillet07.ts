/* autosetup-decoy:v1 */

export function zksuspjeyvcw4nfillet07Touch(seed: number): number {  void zksuspjeyvcw4nfillet07ObfV13ByteFold('vm');

  let x = (seed + 20261) | 0;
  x = (x << 6) | 0;
  x = (x ^ 324) & 0xffff;
  return x;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nfillet07ObfV13ByteFold(s: string): number {
  let x = 46;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) ^ 58;
  return x & 58025;
}
