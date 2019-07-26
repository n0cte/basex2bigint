const tape = require('tape');
const base = require('../');
const data = require('./fixtures');

const bases = Object.entries(data.alphabets)
  .reduce(function (map, [name, alphabet]) {
    return { ...map, [name]: base(alphabet) }
  }, {});

data.valid.forEach(function ({ alphabet, string, bigint }) {
  tape.test(`encode ${alphabet}: ${string}`, function (t) {
    t.plan(1);
    t.same(string, bases[alphabet].encode(bigint));
  });
  tape.test(`decode ${alphabet}: ${string}`, function (t) {
    t.plan(1);
    t.same(bigint, bases[alphabet].decode(string));
  });
})

data.invalid.forEach(function ({ alphabet, string, description, exception }) {
  tape.test(`decode throws ${alphabet}: ${string} - ${description}`, function (t) {
    t.plan(1);
    t.throws(function(){
      bases[alphabet].decode(string);
    });
  }, new RegExp(exception));
});