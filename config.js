exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/scenarios/Register*.js'],
  framework: 'jasmine2' ,
  onPrepare: function() {
      var jasmineReporters = require('C:\\Users\\bishn\\protractor\\project1\\node_modules\\jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
      );
    }
};