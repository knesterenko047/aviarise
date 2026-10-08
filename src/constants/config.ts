/** Tunables for the Aviarise flight-planning puzzle. */

/**
 * Splash duration. EXACTLY 8000ms (CLAUDE.md rule 13): the capture agent needs
 * 4-6s of cold-start overhead before its first screenshot, so anything shorter
 * races the Loader frame away and the pHash gate reads Loader == Menu.
 */
export const LOADER_DURATION_MS = 8000;

/** Crossfade out of the loader. setScreen fires in the SAME tick as the fade. */
export const SCREEN_FADE_MS = 240;

/** Fuel economy. */
export const FUEL_START = 120;
export const FUEL_PER_CELL = 5;
export const PAD_FUEL = 30;
export const MAX_PADS = 2;
export const CORRECTION_REFUND = 8;

/** Wind turns this many degrees after every plotted leg. */
export const WIND_STEP = 60;

/** Storm circle radius, in grid cells. */
export const STORM_RADIUS_CELLS = 0.95;

/** Flight playback. */
export const FLIGHT_MS = 4200;
export const FLIGHT_SAFETY_MS = 5600;

/**
 * Mount-relative, never re-armed. Must stay above the capture agent's ~22s
 * first-shot latency so a human (or the agent) still gets to plan by hand,
 * while a stalled run still produces a flight frame and a result frame.
 */
export const IDLE_BACKSTOP_MS = 30000;

/** Starting wallet. */
export const START_CREDITS = 1250;

/** Menu hub figures (static showcase values). */
export const HUB = {
  streak: 7,
  streakTarget: 5,
  streakDone: 3,
  bestEfficiency: 92,
  parcelsMoved: 48,
  partsOwned: 4,
  partsTotal: 9,
};
