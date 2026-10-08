/* autosetup-decoy:v1 */
package com.zksuspjeyvcw4n

object Dzksuspjeyvcw4nHalo08 {
  fun tap(seed: Int): Int {
    val tag = "Dzksuspjeyvcw4nHalo08"
    var x = seed xor 59258
    for (ch in tag) {
      x = (x + ch.code * 25) and 0xffff
    }
    return x xor 920
  }
}
