underscore.deepclone [![Build Status](https://travis-ci.org/mateusmaso/underscore.deepclone.svg?branch=master)](https://travis-ci.org/mateusmaso/underscore.deepclone)
=======================

This library is an extension for Underscore which allows cloning objects recursively until the pointer tree ends. However, if your object has circular reference it could lead into an infinite loop.

## Features

* Deep clone nested objects.

## Dependencies

* underscore.js (>= 1.5.0)

## Node

```javascript
var _ = require('underscore');
_.mixin(require('underscore.deepclone'));
```

## Examples

```javascript
var object = {foo: {bar: 123}};
var objectClone = _.clone(object);
var objectDeepClone = _.deepClone(object);

object.foo == objectClone.foo; // true
object.foo == objectDeepClone.foo; // false
```

## License

Copyright (c) 2013-2014 Mateus Maso. Released under an MIT license.
