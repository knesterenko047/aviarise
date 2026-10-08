/* autosetup-decoy:v1 */
package com.zksuspjeyvcw4n

object Dzksuspjeyvcw4nLattice09 {
  fun tap(seed: Int): Int {
    var x = seed + 63249
    x = x shl 3
    x = x xor 1158
    return x and 0xffff
  }
}
