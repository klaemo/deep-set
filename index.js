
/**
 * Sets a value of a property in an object tree.
 * Missing objects will (optionally) be created.
 *
 *     var deepSet = require('deep-set')
 *     var obj = { one: { two: { three: 'sad' } } }
 *     deepSet(obj, 'one.two.three', 'yay')
 *     // { one: { two: { three: 'yay' } } }
 *
 * 
 * @param  {object} obj          The object.
 * @param  {string} path         The property path, separated by dots.
 * @param  {*}      value        The value to set.
 * @param  {boolean} create      Whether to create missing objects along the way.
 * @return {object}              The manipulated object.
 */
module.exports = function deepSet (obj, path, value, create) {
  var properties = path.split('.')
  var currentObject = obj
  var property

  create = create === undefined ? true : create

  while (properties.length) {
    property = properties.shift()
    
    if (!currentObject) break;
    
    if (!isObject(currentObject[property]) && create) {
      currentObject[property] = {}
    }

    if (!properties.length){
      currentObject[property] = value
    }
    currentObject = currentObject[property]
  }

  return obj
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}