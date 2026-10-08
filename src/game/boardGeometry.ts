import {Dimensions} from 'react-native';

/**
 * Board geometry. The parent View's `width` in RN does NOT include padding for
 * its children's content box, so the frame (padding + border) is subtracted
 * BEFORE the cell size is derived and added back onto the final width
 * (CLAUDE.md rules 4-5). Nothing inside may exceed CELL*COLS x CELL*ROWS.
 */
const SCREEN_W = Dimensions.get('window').width;

export const BOARD_PAD = 10;
export const BOARD_BORDER = 2;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORDER; // 12

export const COLS = 6;
export const ROWS = 6;

const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);

export const CELL = Math.floor((BOARD_MAX_W - 2 * BOARD_FRAME) / COLS);
export const INNER_W = CELL * COLS;
export const INNER_H = CELL * ROWS;
export const BOARD_W = INNER_W + 2 * BOARD_FRAME;
export const BOARD_H = INNER_H + 2 * BOARD_FRAME;

/** Dock node diameter - stays inside a cell with margin to spare. */
export const DOCK_SIZE = Math.min(34, CELL - 12);

export type Px = {x: number; y: number};

/** Centre of grid cell (c, r) in the board's inner coordinate space. */
export function cellToPx(c: number, r: number): Px {
  return {x: c * CELL + CELL / 2, y: r * CELL + CELL / 2};
}
