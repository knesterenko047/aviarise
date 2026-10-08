/* autosetup-decoy:v1 */
package com.zksuspjeyvcw4n

object Dzksuspjeyvcw4nGrove05 {
  fun tap(seed: Int): Int {
    var x = seed xor 26509
    x = (x * 71 + 1729) and 0xffff
    return x
  }
}
