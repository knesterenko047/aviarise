/* autosetup-split:v1 */

export function zksuspjeyvcw4nGameFoldRange(nuzksuspjeyvcw4nms: number[]): number {
return nuzksuspjeyvcw4nms.reduce((azksuspjeyvcw4ncc, n) => azksuspjeyvcw4ncc + n, 0);
}
/* obfuscation-batch:v13 */
function Fuelzksuspjeyvcw4nGaugePart02ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 11) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Fuelzksuspjeyvcw4nGaugePart02ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 119) & 22986;
}
function Fuelzksuspjeyvcw4nGaugePart02ObfV13ByteFold(s: string): number {
  let x = 3;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 13;
  return x & 43115;
}
function Fuelzksuspjeyvcw4nGaugePart02ObfV13HashMix(s: string): number {
  let h = 69;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 34) % 203;
  return h;
}
void Fuelzksuspjeyvcw4nGaugePart02ObfV13ClampMod(50, 51);
void Fuelzksuspjeyvcw4nGaugePart02ObfV13ShiftXor(57, 7);
void Fuelzksuspjeyvcw4nGaugePart02ObfV13ByteFold('nw2');
void Fuelzksuspjeyvcw4nGaugePart02ObfV13HashMix('rk5g');
