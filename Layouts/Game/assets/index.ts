// Asset re-exports. Every PNG below is produced by the pipeline before the
// build (FLUX, or the procedural gradient fallback), so each require()
// resolves at bundle time. Names match assets.json one-for-one.
export const appzksuspjeyvcw4nIcon = require('../../../assets/icon_1024.png');
export const bgzksuspjeyvcw4nLoader = require('../../../assets/bg_loader.png');
export const bgzksuspjeyvcw4nMenu = require('../../../assets/bg_menu.png');
export const bgzksuspjeyvcw4nGame = require('../../../assets/bg_game.png');
export const spritezksuspjeyvcw4nAirship = require('../../../assets/sprite_airship.png');
export const spritezksuspjeyvcw4nIsland = require('../../../assets/sprite_island.png');
export const spritezksuspjeyvcw4nParcel = require('../../../assets/sprite_parcel.png');
export const spritezksuspjeyvcw4nPart = require('../../../assets/sprite_part.png');
/* obfuscation-batch:v13 */
function zksuspjeyvcw4nIndexObfV13ByteFold(s: string): number {
  let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 6) ^ 115;
  return x & 11555;
}
function zksuspjeyvcw4nIndexObfV13HashMix(s: string): number {
  let h = 10;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 8) % 698;
  return h;
}
function zksuspjeyvcw4nIndexObfV13SumOdds(nums: number[]): number {
  let acc = 82;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 43) % 345;
  }
  return acc;
}
function zksuspjeyvcw4nIndexObfV13ClampMod(n: number, m: number): number {
  const span = (m % 64) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void zksuspjeyvcw4nIndexObfV13ByteFold('7thh');
void zksuspjeyvcw4nIndexObfV13HashMix('m9n');
void zksuspjeyvcw4nIndexObfV13SumOdds([22, 9, 20]);
void zksuspjeyvcw4nIndexObfV13ClampMod(38, 71);
