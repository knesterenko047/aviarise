import {useCallback, useEffect, useMemo, useState} from 'react';

import {MAX_PADS, WIND_STEP} from '../constants/config';
import type {Level} from '../game/levels';
import {evaluate} from '../game/routeEngine';
import type {RouteResult} from '../game/routeEngine';

export type Planner = {
  route: number[];
  pads: number[];
  padArmed: boolean;
  wind: number;
  preview: RouteResult;
  tapDock: (index: number) => void;
  undoLeg: () => void;
  armPad: () => void;
  useSolution: () => number[];
};

/**
 * Route / pad / wind state for one contract. The wind is derived from the leg
 * count rather than stored, so there is one source of truth per CLAUDE rule
 * on minimal state.
 */
export function useRoutePlanner(level: Level): Planner {
  const [route, setRoute] = useState<number[]>([0]);
  const [pads, setPads] = useState<number[]>([]);
  const [padArmed, setPadArmed] = useState(false);

  useEffect(() => {
    setRoute([0]);
    setPads([]);
    setPadArmed(false);
  }, [level]);

  const wind = useMemo(
    () => (level.windStart + WIND_STEP * Math.max(0, route.length - 1)) % 360,
    [level, route],
  );

  const preview = useMemo(() => evaluate(level, route, pads, 0), [level, route, pads]);

  const tapDock = useCallback(
    (index: number) => {
      if (padArmed) {
        setPadArmed(false);
        setPads(prev => {
          if (prev.indexOf(index) !== -1 || prev.length >= MAX_PADS) {
            return prev;
          }
          return prev.concat([index]);
        });
        return;
      }
      setRoute(prev => {
        if (prev.length > 0 && prev[prev.length - 1] === index) {
          return prev;
        }
        if (prev.length - 1 >= level.maxLegs) {
          return prev;
        }
        return prev.concat([index]);
      });
    },
    [padArmed, level],
  );

  const undoLeg = useCallback(() => {
    setRoute(prev => (prev.length > 1 ? prev.slice(0, prev.length - 1) : prev));
  }, []);

  const armPad = useCallback(() => {
    setPadArmed(prev => (pads.length >= MAX_PADS ? false : !prev));
  }, [pads]);

  /** Drop in the proven flight plan and hand it back for immediate scoring. */
  const useSolution = useCallback(() => {
    const plan = level.solution.slice();
    setRoute(plan);
    setPadArmed(false);
    return plan;
  }, [level]);

  return {route, pads, padArmed, wind, preview, tapDock, undoLeg, armPad, useSolution};
}

export default useRoutePlanner;
