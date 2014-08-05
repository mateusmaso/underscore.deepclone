// underscore.deepclone
// --------------------
// v0.1.0
//
// Copyright (c) 2013-2014 Mateus Maso
// Distributed under MIT license
//
// http://github.com/mateusmaso/underscore.deepclone

(function(root, factory) {

  if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(_);
    exports = factory(_);
  } else {
    root._.mixin(factory(root._));
  }

}(this, function(_) {

  return {
    deepClone: function(object) {
      var clone = _.clone(object);

      _.each(clone, function(value, key) {
        if (_.isObject(value)) {
          clone[key] = _.deepClone(value);
        }
      });

      return clone;
    }
  };

}));