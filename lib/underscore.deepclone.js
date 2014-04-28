(function(_) {

  _.deepClone = function(object) {
    var clone = _.clone(object);

    _.each(clone, function(value, key) {
      if (_.isObject(value))
        clone[key] = _.deepClone(value);
    });

    return clone;
  };

})(_);