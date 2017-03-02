var chai = require("chai");
var _ = require("underscore");
_.mixin(require('../src/underscore.deepclone'));

describe("underscore.deepclone", function() {
  beforeEach(function() {
    this.object = {foo: {bar: 123}};
  });

  it("should deep clone", function() {
    chai.expect(_.deepClone(this.object).foo).to.not.equal(this.object.foo);
  });
});
