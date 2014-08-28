# deep-set

Sets a value of a property in an object tree. Missing objects will (optionally) be created.

## Installation

    npm install deep-set

In the browser you can use deepSet with Browserify, RequireJS or as a window global.

## Usage

```js
var deepSet = require('deep-set')
var obj = { one: { two: { three: 'sad' } } }

deepSet(obj, 'one.two.three', 'yay')
// { one: { two: { three: 'yay' } } }
```

### Arguments

`deepSet(obj, path, value, create)`

- `obj - Object`: The original object.
- `path - String`: The path to traverse, separated by dots.
- `value - *`: The value to set.
- `create - Boolean`: Whether to create missing objects along the way `default: true`.

## Tests

    npm test


## License

MIT

