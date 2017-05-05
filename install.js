var fs = require('fs');
var path = require('path');

// Process arguments

if (process.argv.length < 3) {
  console.log('Usage: install <path to theme>');
  process.exit(0);
}

var _themePath = path.resolve(process.argv[2]);

// Helper functions

function corePath() {
  var params = [__dirname].concat(Array.from(arguments));
  return path.join.apply(null, params);
}

function themePath() {
  var params = [_themePath].concat(Array.from(arguments));
  return path.join.apply(null, params);
}

function loadJSON(path) {
  var contents = fs.readFileSync(path, 'utf-8');
  return JSON.parse(contents);
}

function saveJSON(path, data) {
  var contents = JSON.stringify(data, null, '  ');
  fs.writeFileSync(path, contents, 'utf-8');
}

function merge(source, destination, fn) {
  var sourceData = loadJSON(source);
  var destinationData = loadJSON(destination);
  var processedData = fn(sourceData, destinationData);
  saveJSON(destination, processedData);
}

// Install language files
merge(corePath('lang/en.json'), themePath('lang/en.json'), (coreLang, themeLang) => {
  return Object.assign({}, themeLang, coreLang);
});

// Install config.json
merge(corePath('config/config.json'), themePath('config.json'), (coreConfig, themeConfig) => {
  Object.keys(coreConfig.settings).forEach(key => {
    themeConfig.settings[key] = coreConfig.settings[key];
  });
  return themeConfig;
});

// schema.json
merge(corePath('config/schema.json'), themePath('schema.json'), (coreSchema, themeSchema) => {
  var insert = coreSchema.insert || [];
  var remove = coreSchema.remove || [];

  // Remove schema sections
  themeSchema = themeSchema.filter(schema => remove.indexOf(schema.name) === -1);

  // Insert schema sections
  themeSchema = themeSchema.concat(insert);

  return themeSchema;
});
