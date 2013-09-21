underscore.deepclone.js
=======================

```javascript
var object = {foo: {bar: 123}};
var objectClone = _.clone(object);
var objectDeepClone = _.deepClone(object);

object.foo == objectClone.foo // true
object.foo == objectDeepClone.foo // false
```
