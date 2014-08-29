var deepSet = require('..')
var test = require('tape')

var obj = { one: { two: { three: 'sad' } } }


test('set existing property', function (t) {
  t.plan(2)
  t.equal(obj.one.two.three, 'sad')

  deepSet(obj, 'one.two.three', 'three')
  t.equal(obj.one.two.three, 'three')
})

test('set non-existing property', function (t) {
  t.plan(2)
  deepSet(obj, 'one.two.four', 'four')
  t.equal(obj.one.two.four, 'four')
  t.equal(obj.one.two.three, 'three')
})

test('create missing objects by default', function (t) {
  t.plan(1)
  deepSet(obj, 'one.five.six', 'six')
  t.equal(obj.one.five.six, 'six')
})

test('do not create missing objects', function (t) {
  t.plan(2)
  t.equal(obj.one.seven, undefined)
  deepSet(obj, 'one.seven.eight', 'eight', false)
  t.equal(obj.one.seven, undefined, 'should not create missing objects')
})
