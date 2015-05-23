#!/usr/bin/env node


'use strict';

var fs = require('fs');

var buildFolder = process.cwd();
var options = process.argv.slice(2).join(' ');
var templatePath = '' + __dirname + '/../templates';
var componentName, type;

if (options.match('/component/')) {
  componentName = process.argv[3];
  type = 'component';
} else {
  componentName = process.argv[2];
  type = 'component';
}

var settings = { extension: 'jsx' };
try {
  settings = JSON.parse(fs.readFileSync('' + buildFolder + '/reactg.json'));
} catch (e) {
  console.warn('reactg.json not found in the project directory, using default settings');
}
//later on add a type for making actions and stores?
if (type == 'component') {
  fs.readFile('' + templatePath + '/components/es6-component.js', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    var result = data.replace(/COMPONENT/g, componentName);
    //add more settings here
    if (settings.constructor) result = result.replace(/CONSTRUCTOR/g, fs.readFileSync('' + templatePath + '/methods/constructor.js'));else result = result.replace(/CONSTRUCTOR/g, '');

    fs.writeFile('' + buildFolder + '/' + componentName + '.' + settings.extension, result, 'utf8', function (err) {
      if (err) return console.log(err);else console.log('Successfully Generated ' + componentName);
    });
  });
}