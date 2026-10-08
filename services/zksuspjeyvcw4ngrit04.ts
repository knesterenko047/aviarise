/* autosetup-decoy:v1 */

export function zksuspjeyvcw4ngrit04Touch(seed: number): number {  void zksuspjeyvcw4ngrit04ObfV13ClampMod(25, 49);
  void zksuspjeyvcw4ngrit04ObfV13ShiftXor(27, 81);

  const tag = "zksuspjeyvcw4ngrit04Touch";
  let x = (seed ^ 7222) & 0xffff;
  for (let i = 0; i < tag.length; i++) {
    x = (x + tag.charCodeAt(i) * 65) & 0xffff;
  }
  return x ^ 1622;
}
/* obfuscation-batch:v13 */
function zksuspjeyvcw4ngrit04ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 27) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function zksuspjeyvcw4ngrit04ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 169) & 30467;
}
