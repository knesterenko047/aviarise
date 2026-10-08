/* autosetup-decoy:v1 */
package com.zksuspjeyvcw4n

object Dzksuspjeyvcw4nQuanta04 {
  fun tap(seed: Int): Int {
    val tag = "Dzksuspjeyvcw4nQuanta04"
    var x = seed xor 1251
    for (ch in tag) {
      x = (x + ch.code * 47) and 0xffff
    }
    return x xor 830
  }
}
