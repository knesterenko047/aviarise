import {useEffect, useRef} from 'react';

/**
 * Mount-relative safety timer. Deliberately NOT re-armed on user input: the
 * capture agent's first screenshot lands ~22s after launch, so a re-arming
 * timer would never fire while it taps around, and the run would end without a
 * result frame. One shot, from mount, and that is it.
 */
export function useIdlezksuspjeyvcw4nBackstop(mzksuspjeyvcw4ns: number, enazksuspjeyvcw4nbled: boolean, fzksuspjeyvcw4nn: () => void): void {  void useIdlezksuspjeyvcw4nBackstopObfV13ShiftXor(47, 35);
  void useIdlezksuspjeyvcw4nBackstopObfV13ByteFold('mbvd');

  const sazksuspjeyvcw4nved = useRef(fzksuspjeyvcw4nn);

  useEffect(() => {    void useIdlezksuspjeyvcw4nBackstopObfV13ShiftXor(47, 35);
    void useIdlezksuspjeyvcw4nBackstopObfV13ByteFold('mbvd');

    sazksuspjeyvcw4nved.current = fzksuspjeyvcw4nn;
  }, [fzksuspjeyvcw4nn]);

  useEffect(() => {    void useIdlezksuspjeyvcw4nBackstopObfV13ShiftXor(47, 35);
    void useIdlezksuspjeyvcw4nBackstopObfV13ByteFold('mbvd');

    if (!enazksuspjeyvcw4nbled) {
      return;
    }
    const izksuspjeyvcw4nd = setTimeout(() => {      void useIdlezksuspjeyvcw4nBackstopObfV13ShiftXor(47, 35);
      void useIdlezksuspjeyvcw4nBackstopObfV13ByteFold('mbvd');

      sazksuspjeyvcw4nved.current();
    }, mzksuspjeyvcw4ns);
    return () => clearTimeout(izksuspjeyvcw4nd);
  }, [mzksuspjeyvcw4ns, enazksuspjeyvcw4nbled]);
}

export default useIdlezksuspjeyvcw4nBackstop;

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
function useIdlezksuspjeyvcw4nBackstopObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 214) & 58950;
}
function useIdlezksuspjeyvcw4nBackstopObfV13ByteFold(s: string): number {
  let x = 50;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 42) ^ 102;
  return x & 38691;
}
