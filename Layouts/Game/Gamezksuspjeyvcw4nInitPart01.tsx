/* autosetup-split:v1 */

export function zksuspjeyvcw4nGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}

export function zksuspjeyvcw4nGameFoldRange(nuzksuspjeyvcw4nms: number[]): number {
  return nuzksuspjeyvcw4nms.reduce((azksuspjeyvcw4ncc, n) => azksuspjeyvcw4ncc + n, 0);
}

export function zksuspjeyvcw4nGameClampSpan(n: number, lzksuspjeyvcw4no: number, hzksuspjeyvcw4ni: number): number {
  return n < lzksuspjeyvcw4no ? lzksuspjeyvcw4no : n > hzksuspjeyvcw4ni ? hzksuspjeyvcw4ni : n;
}

export function Gamezksuspjeyvcw4nInitObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 947, 0);
}
export function Gamezksuspjeyvcw4nInitObfV5SumOdds(nuzksuspjeyvcw4nms: number[]): number {
  return nuzksuspjeyvcw4nms.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}
export function Gamezksuspjeyvcw4nInitObfV5ClampMod(n: number, m: number): number {
  const mzksuspjeyvcw4nod = m || 1;
  return ((n % mzksuspjeyvcw4nod) + mzksuspjeyvcw4nod) % mzksuspjeyvcw4nod;
}

export function Gamezksuspjeyvcw4nInitObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 953, 0);
}
export function Gamezksuspjeyvcw4nInitObfV6SumOdds(nuzksuspjeyvcw4nms: number[]): number {
  return nuzksuspjeyvcw4nms.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
export function Gamezksuspjeyvcw4nInitObfV6ClampMod(n: number, m: number): number {
  const mzksuspjeyvcw4nod = m || 1;
  return ((n % mzksuspjeyvcw4nod) + mzksuspjeyvcw4nod) % mzksuspjeyvcw4nod;
}

export function Gamezksuspjeyvcw4nInitObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 967, 0);
}
export function Gamezksuspjeyvcw4nInitObfV7SumOdds(nuzksuspjeyvcw4nms: number[]): number {
  return nuzksuspjeyvcw4nms.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 27, 0);
}
export function Gamezksuspjeyvcw4nInitObfV7ClampMod(n: number, m: number): number {
  const mzksuspjeyvcw4nod = m || 1;
  return ((n % mzksuspjeyvcw4nod) + mzksuspjeyvcw4nod) % mzksuspjeyvcw4nod;
}

export function Gamezksuspjeyvcw4nInitObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 49) % 971, 0);
}
export function Gamezksuspjeyvcw4nInitObfV8SumOdds(nuzksuspjeyvcw4nms: number[]): number {
  return nuzksuspjeyvcw4nms.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
export function Gamezksuspjeyvcw4nInitObfV8ClampMod(n: number, m: number): number {
  const mzksuspjeyvcw4nod = m || 1;
  return ((n % mzksuspjeyvcw4nod) + mzksuspjeyvcw4nod) % mzksuspjeyvcw4nod;
}

export function Gamezksuspjeyvcw4nInitObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 51) % 977, 0);
}
export function Gamezksuspjeyvcw4nInitObfV9SumOdds(nuzksuspjeyvcw4nms: number[]): number {
  return nuzksuspjeyvcw4nms.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 31, 0);
}
export function Gamezksuspjeyvcw4nInitObfV9ClampMod(n: number, m: number): number {
  const mzksuspjeyvcw4nod = m || 1;
  return ((n % mzksuspjeyvcw4nod) + mzksuspjeyvcw4nod) % mzksuspjeyvcw4nod;
}
