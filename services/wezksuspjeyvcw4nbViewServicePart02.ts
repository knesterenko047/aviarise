/* autosetup-split:v1 */

export function wezksuspjeyvcw4nbViewServiceObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function zksuspjeyvcw4nwezksuspjeyvcw4nbObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function wezksuspjeyvcw4nbViewServiceObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function wezksuspjeyvcw4nbViewServicePart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function wezksuspjeyvcw4nbViewServiceObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function wezksuspjeyvcw4nbViewServiceObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function wezksuspjeyvcw4nbViewServiceObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function zksuspjeyvcw4nwezksuspjeyvcw4nbViewServObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function wezksuspjeyvcw4nbViewServiceObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function wezksuspjeyvcw4nbViewServiceObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function swefgdetguhjhoioesClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

export function zksuspjeyvcw4nwezksuspjeyvcw4nbObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function wezksuspjeyvcw4nbViewServiceObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function wezksuspjeyvcw4nbViewServicePart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function wezksuspjeyvcw4nbViewServicePart02ObfV13SumOdds(nums: number[]): number {
  let acc = 67;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 21) % 739;
  }
  return acc;
}
void wezksuspjeyvcw4nbViewServicePart02ObfV13SumOdds([18, 4, 4]);
