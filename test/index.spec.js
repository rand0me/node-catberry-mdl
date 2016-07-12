import 'should';
import catberryMdl from '../lib';

describe('catberry-mdl', function () {

  it(' should have #register method', function () {
    catberryMdl
        .should.have.property('register')
        .which.is.Function();
  });

  it(' locatorMock shouldn\'t have "mdl" property by default', function () {
    var locator = getLocatorMock();
    locator
      .should.not.have.property('mdl');
  });

  it(' locatorMock should have "mdl" property after service registration', function () {
    var locator = getLocatorMock();

    // Register "mdl" service
    catberryMdl.register(locator);

    locator
      .should.have.property('mdl');
  });
});

function getLocatorMock() {
  return {
    registerInstance: function (name, instance) {
      this[name] = instance;

      return this;
    }
  }
}
