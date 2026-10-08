import {useEffect, useRef} from 'react';

/**
 * Mount-relative safety timer. Deliberately NOT re-armed on user input: the
 * capture agent's first screenshot lands ~22s after launch, so a re-arming
 * timer would never fire while it taps around, and the run would end without a
 * result frame. One shot, from mount, and that is it.
 */
export function useIdleBackstop(ms: number, enabled: boolean, fn: () => void): void {
  const saved = useRef(fn);

  useEffect(() => {
    saved.current = fn;
  }, [fn]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const id = setTimeout(() => {
      saved.current();
    }, ms);
    return () => clearTimeout(id);
  }, [ms, enabled]);
}

export default useIdleBackstop;
