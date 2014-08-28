var deepSet = require('..')
var assert = require('assert')

var obj = { one: { two: { three: 'sad' } } }

assert.equal(obj.one.two.three, 'sad')

deepSet(obj, 'one.two.three', 'three')
assert.equal(obj.one.two.three, 'three')

deepSet(obj, 'one.two.four', 'four')
assert.equal(obj.one.two.four, 'four')
assert.equal(obj.one.two.three, 'three')

// create missing objects
deepSet(obj, 'one.five.six', 'six')
assert.equal(obj.one.five.six, 'six', 'should create missing objects by default')

// create missing objects
assert.strictEqual(obj.one.seven, undefined)
deepSet(obj, 'one.seven.eight', 'eight', false)
assert.strictEqual(obj.one.seven, undefined, 'should not create missing objects')
