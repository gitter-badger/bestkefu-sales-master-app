'use strict';

var _ = require('lodash');
var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

// An example configuration file.

var config = {

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: [paths.e2e + '/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};

if(process.env['TEAMCITY_CI'])
{
  _.extend(config, {
    seleniumAddress: 'http://localhost:4444',
    capabilities: {
      'browserName': 'phantomjs'
    }
  });
}
else
{
  _.extend(config, {
    capabilities: {
      'browserName': 'chrome'
    }
  });
}

console.log(config);

exports.config = config;
