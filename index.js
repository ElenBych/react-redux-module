#!/usr/bin/env node

'use strict';

const { argv } = require('process');
const { existsSync, mkdirSync, writeFileSync } = require('fs');
const path = require('path');

require('./caseConverter');

const args = argv.slice(2);
let arg = args[0];

if (!arg) {
  return;
}

let kebabCase = arg.toKebabCase();
let camelCase = arg.toCamalCase();
let titleCase = arg.toTitleCase();

if (!existsSync('src')) {
  mkdirSync('src');
}

if (!existsSync(`src/${kebabCase}`)) {
  mkdirSync(`src/${kebabCase}`);
}

writeFileSync(`src/${kebabCase}/${camelCase}Reducer.js`, '', 'utf8');

writeFileSync(`src/${kebabCase}/${titleCase}Action.js`, '', 'utf8');
writeFileSync(`src/${kebabCase}/${titleCase}Constant.js`, '', 'utf8');
writeFileSync(`src/${kebabCase}/${titleCase}Container.js`, '', 'utf8');
writeFileSync(`src/${kebabCase}/${titleCase}Component.jsx`, '', 'utf8');
writeFileSync(`src/${kebabCase}/${titleCase}-spec.js`, '', 'utf8');

writeFileSync(`src/${kebabCase}/${kebabCase}.scss`, '', 'utf8');
