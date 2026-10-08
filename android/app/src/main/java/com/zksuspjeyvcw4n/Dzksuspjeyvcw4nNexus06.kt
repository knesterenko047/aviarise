/* autosetup-decoy:v1 */
package com.zksuspjeyvcw4n

object Dzksuspjeyvcw4nNexus06 {
  fun tap(seed: Int): Int {
    var x = seed + 41450
    x = x shl 6
    x = x xor 2310
    return x and 0xffff
  }
}
