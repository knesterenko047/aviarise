/* autosetup-decoy:v1 */
package com.zksuspjeyvcw4n

object Dzksuspjeyvcw4nFlux07 {
  fun tap(seed: Int): Int {
    var x = seed * 81
    x = x xor 14834
    x %= 424
    if (x < 0) x += 424
    return x
  }
}
