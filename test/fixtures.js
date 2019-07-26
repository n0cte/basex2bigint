module.exports = {
  alphabets: {
    base2: '01',
    base58: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
  },
  valid: [{
    alphabet: 'base2',
    string: '1111',
    bigint: BigInt('0b01111')
  }, {
    alphabet: 'base2',
    string: '11111111',
    bigint: BigInt('0b011111111')
  }, {
    alphabet: 'base58',
    string: '2g',
    bigint: BigInt('0x61')
  }, {
    alphabet: 'base58',
    string: 'a3gV',
    bigint: BigInt('0x626262')
  }, {
    alphabet: 'base58',
    string: 'FPBt6CHo3fovdL',
    bigint: BigInt('0xffffffffffffffffffff')
  }, {
    alphabet: 'base58',
    string: 'NKioeUVktgzXLJ1B3t',
    bigint: BigInt('0xffffffffffffffffffffffffff')
  }, {
    alphabet: 'base58',
    string: '42B8reRwPAAoAa',
    bigint: BigInt('0x35c231e5b3a86a9b83db')
  }, {
    alphabet: 'base58',
    string: 'B1hPyomGx4Vhqa',
    bigint: BigInt('0xb2351012a48b8347c351')
  }],
  invalid: [{
    alphabet: 'base58',
    string: {},
    description: 'non-base58 string',
    exception: '^Value passed is not a valid Base58 string.$',
  }, {
    alphabet: 'base58',
    string: '#####',
    description: 'non-base58 string',
    exception: '^Value passed is not a valid Base58 string.$',
  }, {
    alphabet: 'base58',
    string: 'invalid',
    description: 'non-base58 string',
    exception: '^Value passed is not a valid Base58 string.$',
  }, {
    alphabet: 'base58',
    string: 'c2F0b3NoaQo=',
    description: 'non-base58 string',
    exception: '^Value passed is not a valid Base58 string.$',
  }, {
    alphabet: 'base58',
    string: ' 1111111111',
    description: 'leading whitespace',
    exception: '^Value passed is not a valid Base58 string.$',
  }]
}