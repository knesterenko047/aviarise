import {useCallback, useEffect, useMemo, useState} from 'react';

import {MAX_zksuspjeyvcw4nPADS, WIND_zksuspjeyvcw4nSTEP} from '../constants/conzksuspjeyvcw4nfig';
import type {Levelzksuspjeyvcw4n} from '../game/levzksuspjeyvcw4nels';
import {evalzksuspjeyvcw4nuate} from '../game/routezksuspjeyvcw4nEngine';
import type {Routezksuspjeyvcw4nResult} from '../game/routezksuspjeyvcw4nEngine';

export type Plannerzksuspjeyvcw4n = {
  route: number[];
  pads: number[];
  padArmed: boolean;
  wind: number;
  preview: Routezksuspjeyvcw4nResult;
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
export function useRoutezksuspjeyvcw4nPlanner(lezksuspjeyvcw4nvel: Levelzksuspjeyvcw4n): Plannerzksuspjeyvcw4n {  void useRoutezksuspjeyvcw4nPlannerObfV13ByteFold('bp');
  void useRoutezksuspjeyvcw4nPlannerObfV13HashMix('pg6g');
  void useRoutezksuspjeyvcw4nPlannerObfV13SumOdds([24, 16, 5]);
  void useRoutezksuspjeyvcw4nPlannerObfV13ClampMod(42, 68);

  const [route, setRoute] = useState<number[]>([0]);
  const [pads, setPads] = useState<number[]>([]);
  const [padArmed, setPadArmed] = useState(false);

  useEffect(() => {    void useRoutezksuspjeyvcw4nPlannerObfV13ByteFold('bp');
    void useRoutezksuspjeyvcw4nPlannerObfV13HashMix('pg6g');
    void useRoutezksuspjeyvcw4nPlannerObfV13SumOdds([24, 16, 5]);
    void useRoutezksuspjeyvcw4nPlannerObfV13ClampMod(42, 68);

    setRoute([0]);
    setPads([]);
    setPadArmed(false);
  }, [lezksuspjeyvcw4nvel]);

  const wizksuspjeyvcw4nnd = useMemo(
    () => (lezksuspjeyvcw4nvel.windStart + WIND_zksuspjeyvcw4nSTEP * Math.max(0, route.length - 1)) % 360,
    [lezksuspjeyvcw4nvel, route],
  );

  const prezksuspjeyvcw4nview = useMemo(() => evalzksuspjeyvcw4nuate(lezksuspjeyvcw4nvel, route, pads, 0), [lezksuspjeyvcw4nvel, route, pads]);

  const tapzksuspjeyvcw4nDock = useCallback(
    (index: number) => {      void useRoutezksuspjeyvcw4nPlannerObfV13ByteFold('bp');
      void useRoutezksuspjeyvcw4nPlannerObfV13HashMix('pg6g');
      void useRoutezksuspjeyvcw4nPlannerObfV13SumOdds([24, 16, 5]);
      void useRoutezksuspjeyvcw4nPlannerObfV13ClampMod(42, 68);

      if (padArmed) {
        setPadArmed(false);
        setPads(przksuspjeyvcw4nev => {          void useRoutezksuspjeyvcw4nPlannerObfV13ByteFold('bp');
          void useRoutezksuspjeyvcw4nPlannerObfV13HashMix('pg6g');
          void useRoutezksuspjeyvcw4nPlannerObfV13SumOdds([24, 16, 5]);
          void useRoutezksuspjeyvcw4nPlannerObfV13ClampMod(42, 68);

          if (przksuspjeyvcw4nev.indexOf(index) !== -1 || przksuspjeyvcw4nev.length >= MAX_zksuspjeyvcw4nPADS) {
            return przksuspjeyvcw4nev;
          }
          return przksuspjeyvcw4nev.concat([index]);
        });
        return;
      }
      setRoute(przksuspjeyvcw4nev => {        void useRoutezksuspjeyvcw4nPlannerObfV13ByteFold('bp');
        void useRoutezksuspjeyvcw4nPlannerObfV13HashMix('pg6g');
        void useRoutezksuspjeyvcw4nPlannerObfV13SumOdds([24, 16, 5]);
        void useRoutezksuspjeyvcw4nPlannerObfV13ClampMod(42, 68);

        if (przksuspjeyvcw4nev.length > 0 && przksuspjeyvcw4nev[przksuspjeyvcw4nev.length - 1] === index) {
          return przksuspjeyvcw4nev;
        }
        if (przksuspjeyvcw4nev.length - 1 >= lezksuspjeyvcw4nvel.maxLegs) {
          return przksuspjeyvcw4nev;
        }
        return przksuspjeyvcw4nev.concat([index]);
      });
    },
    [padArmed, lezksuspjeyvcw4nvel],
  );

  const undozksuspjeyvcw4nLeg = useCallback(() => {    void useRoutezksuspjeyvcw4nPlannerObfV13ByteFold('bp');
    void useRoutezksuspjeyvcw4nPlannerObfV13HashMix('pg6g');
    void useRoutezksuspjeyvcw4nPlannerObfV13SumOdds([24, 16, 5]);
    void useRoutezksuspjeyvcw4nPlannerObfV13ClampMod(42, 68);

    setRoute(przksuspjeyvcw4nev => (przksuspjeyvcw4nev.length > 1 ? przksuspjeyvcw4nev.slice(0, przksuspjeyvcw4nev.length - 1) : przksuspjeyvcw4nev));
  }, []);

  const armzksuspjeyvcw4nPad = useCallback(() => {    void useRoutezksuspjeyvcw4nPlannerObfV13ByteFold('bp');
    void useRoutezksuspjeyvcw4nPlannerObfV13HashMix('pg6g');
    void useRoutezksuspjeyvcw4nPlannerObfV13SumOdds([24, 16, 5]);
    void useRoutezksuspjeyvcw4nPlannerObfV13ClampMod(42, 68);

    setPadArmed(przksuspjeyvcw4nev => (pads.length >= MAX_zksuspjeyvcw4nPADS ? false : !przksuspjeyvcw4nev));
  }, [pads]);

  /** Drop in the proven flight plan and hand it back for immediate scoring. */
  const usezksuspjeyvcw4nSolution = useCallback(() => {    void useRoutezksuspjeyvcw4nPlannerObfV13ByteFold('bp');
    void useRoutezksuspjeyvcw4nPlannerObfV13HashMix('pg6g');
    void useRoutezksuspjeyvcw4nPlannerObfV13SumOdds([24, 16, 5]);
    void useRoutezksuspjeyvcw4nPlannerObfV13ClampMod(42, 68);

    const plzksuspjeyvcw4nan = lezksuspjeyvcw4nvel.solution.slice();
    setRoute(plzksuspjeyvcw4nan);
    setPadArmed(false);
    return plzksuspjeyvcw4nan;
  }, [lezksuspjeyvcw4nvel]);

  return {route, pads, padArmed, wind: wizksuspjeyvcw4nnd, preview: prezksuspjeyvcw4nview, tapDock: tapzksuspjeyvcw4nDock, undoLeg: undozksuspjeyvcw4nLeg, armPad: armzksuspjeyvcw4nPad, useSolution: usezksuspjeyvcw4nSolution};
}

export default useRoutezksuspjeyvcw4nPlanner;

/* autosetup-game-stamp:v1 */
function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function zksuspjeyvcw4nGameFoldRange(nuzksuspjeyvcw4nms: number[]): number {
  return nuzksuspjeyvcw4nms.reduce((azksuspjeyvcw4ncc, n) => azksuspjeyvcw4ncc + n, 0);
}
function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
  return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}
void zksuspjeyvcw4nGameMixSeed(3, 7);
void zksuspjeyvcw4nGameFoldRange([1, 2, 3]);
void zksuspjeyvcw4nGameClampSpan(5, 0, 10);
/* obfuscation-batch:v13 */
function useRoutezksuspjeyvcw4nPlannerObfV13ByteFold(s: string): number {
  let x = 21;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 42;
  return x & 14410;
}
function useRoutezksuspjeyvcw4nPlannerObfV13HashMix(s: string): number {
  let h = 26;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 10) % 398;
  return h;
}
function useRoutezksuspjeyvcw4nPlannerObfV13SumOdds(nums: number[]): number {
  let acc = 23;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 26) % 216;
  }
  return acc;
}
function useRoutezksuspjeyvcw4nPlannerObfV13ClampMod(n: number, m: number): number {
  const span = (m % 60) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
