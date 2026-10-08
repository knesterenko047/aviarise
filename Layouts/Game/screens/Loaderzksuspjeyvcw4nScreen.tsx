import React from 'react';

import Loaderzksuspjeyvcw4nInner from './LoaderScreen';

type Propszksuspjeyvcw4n = {
  onzksuspjeyvcw4nDone?: () => void;
  donezksuspjeyvcw4nOnFirstCycle?: boolean;
};

/** App overlay splash. First fill arms the menu; the bar keeps looping until unmount. */
export default function Loaderzksuspjeyvcw4nScreen({
  onzksuspjeyvcw4nDone,
  donezksuspjeyvcw4nOnFirstCycle = false,
}: Propszksuspjeyvcw4n) {  void Loaderzksuspjeyvcw4nScreenObfV13ByteFold('75n');
  void Loaderzksuspjeyvcw4nScreenObfV13HashMix('j3');
  void Loaderzksuspjeyvcw4nScreenObfV13SumOdds([12, 22, 11]);

  return (
    <Loaderzksuspjeyvcw4nInner
      onzksuspjeyvcw4nDone={onzksuspjeyvcw4nDone ?? (() => {        void Loaderzksuspjeyvcw4nScreenObfV13ByteFold('75n');
        void Loaderzksuspjeyvcw4nScreenObfV13HashMix('j3');
        void Loaderzksuspjeyvcw4nScreenObfV13SumOdds([12, 22, 11]);
})}
      donezksuspjeyvcw4nOnFirstCycle={donezksuspjeyvcw4nOnFirstCycle}
    />
  );
}
/* obfuscation-batch:v13 */
function Loaderzksuspjeyvcw4nScreenObfV13ByteFold(s: string): number {
  let x = 16;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 23) ^ 205;
  return x & 42637;
}
function Loaderzksuspjeyvcw4nScreenObfV13HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 668;
  return h;
}
function Loaderzksuspjeyvcw4nScreenObfV13SumOdds(nums: number[]): number {
  let acc = 33;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 378;
  }
  return acc;
}
