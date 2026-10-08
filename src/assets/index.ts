// Asset re-exports. Every PNG below is produced by the pipeline before the
// build (FLUX, or the procedural gradient fallback), so each require()
// resolves at bundle time. Names match assets.json one-for-one.
export const appIcon = require('../../assets/icon_1024.png');
export const bgLoader = require('../../assets/bg_loader.png');
export const bgMenu = require('../../assets/bg_menu.png');
export const bgGame = require('../../assets/bg_game.png');
export const spriteAirship = require('../../assets/sprite_airship.png');
export const spriteIsland = require('../../assets/sprite_island.png');
export const spriteParcel = require('../../assets/sprite_parcel.png');
export const spritePart = require('../../assets/sprite_part.png');
