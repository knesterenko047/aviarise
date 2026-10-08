/* autosetup-split:v1 */

export function constzksuspjeyvcw4nntsVariableObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constzksuspjeyvcw4nntsVariableObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function zksuspjeyvcw4nconstbchlipsoqiyroObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function constzksuspjeyvcw4nntsVariableObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function constzksuspjeyvcw4nntsVariableObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function zksuspjeyvcw4nconstzksuspjeyvcw4nntsVarObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function zksuspjeyvcw4nFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function constzksuspjeyvcw4nntsVariableObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constzksuspjeyvcw4nntsVariableObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function constzksuspjeyvcw4nntsVariablePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constzksuspjeyvcw4nntsVariableObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function zksuspjeyvcw4nconstbchlipsoqiyroObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function constzksuspjeyvcw4nntsVariableObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function constzksuspjeyvcw4nntsVariableObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constzksuspjeyvcw4nntsVariableObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function zksuspjeyvcw4nconstbchlipsoqiyroObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function zksuspjeyvcw4nconstbchlipsoqiyroObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function zksuspjeyvcw4nconstbchlipsoqiyroObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function constzksuspjeyvcw4nntsVariableObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function constzksuspjeyvcw4nntsVariablePart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function constzksuspjeyvcw4nntsVariableObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function constzksuspjeyvcw4nntsVariablePart02ObfV13SumOdds(nums: number[]): number {
  let acc = 33;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 805;
  }
  return acc;
}
void constzksuspjeyvcw4nntsVariablePart02ObfV13SumOdds([15, 12, 26]);
