/* autosetup-decoy:v1 */
package com.zksuspjeyvcw4n

object Dzksuspjeyvcw4nShard02 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 40572
    x = (x ushr 1) xor 593
    x = (x * 3) and 0xffff
    return x
  }
}
