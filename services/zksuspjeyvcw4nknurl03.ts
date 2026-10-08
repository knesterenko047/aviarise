/* autosetup-decoy:v1 */

export function zksuspjeyvcw4nknurl03Touch(seed: number): number {  void zksuspjeyvcw4nknurl03ObfV13ByteFold('mk88');

  let x = (seed ^ 59618) | 0;
  x = (x >>> 2) ^ 1644;
  x = Math.imul(x, 5) & 0xffff;
  return x;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nknurl03ObfV13ByteFold(s: string): number {
  let x = 24;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) ^ 120;
  return x & 47592;
}
