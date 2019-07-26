/**
 * @typedef {Object} Coder
 * @property {function}[encode] 
 * @property {function} [decode]
 */

/**
 * @param {string} [alphabet]
 * @returns {Coder}
 */
function Base(alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz') {
  const base = BigInt(alphabet.length);
  const cmap = [...alphabet].reduce((map, ch, i) => ({ ...map, [ch]: BigInt(i) }), {});
  const rege = new RegExp(`^[${alphabet}]+$`);

  /**
   * @param {BigInt} num
   * @returns {string}
   */
  function encode(num = BigInt(0)) {
    let str = '';
    while (num >= base) {
      str = alphabet[num % base] + str;
      num = num / base
    }
    return alphabet[num] + str;
  }

  /**
   * @param {string} data
   * @returns {BigInt}
   */
  function decode(data = '') {
    if (!rege.test(data)) {
      throw new Error(`Value passed is not a valid Base${base} string.`);
    }
    return [...data].reverse().reduce(
      (num, ch, i) => num + BigInt(cmap[ch]) * (base ** BigInt(i)),
      BigInt(0)
    );
  }

  return { encode, decode };
}

module.exports = Base;