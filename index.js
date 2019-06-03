#!/usr/bin/env node

'use strict';

const { argv } = require('process');
const { existsSync, mkdirSync, writeFileSync } = require('fs');
const chalk = require('chalk');

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

let componentContent = `import React, { Component } from 'react';
import './${kebabCase}.scss';

class ${titleCase} extends Component {
  render() {
    return (
      <h1>
        ${titleCase}
      </h1>
    );
  }
}

export default ${titleCase};`;

if (!existsSync(`src/${kebabCase}`)) {
  mkdirSync(`src/${kebabCase}`);
  console.log(chalk`{green.bold ✔  }${kebabCase} folder created`);

  writeFileSync(`src/${kebabCase}/${titleCase}Container.js`, '', 'utf8');
  console.log(chalk`{green.bold ✔  }${titleCase}Container.js created`);

  writeFileSync(`src/${kebabCase}/${titleCase}Constant.js`, '', 'utf8');
  console.log(chalk`{green.bold ✔  }${titleCase}Constant.js created`);

  writeFileSync(`src/${kebabCase}/${camelCase}Reducer.js`, '', 'utf8');
  console.log(chalk`{green.bold ✔  }${camelCase}Reducer.js created`);

  writeFileSync(`src/${kebabCase}/${titleCase}Action.js`, '', 'utf8');
  console.log(chalk`{green.bold ✔  }${titleCase}Action.js created`);

  writeFileSync(`src/${kebabCase}/${titleCase}-spec.js`, '', 'utf8');
  console.log(chalk`{green.bold ✔  }${titleCase}-spec.js created`);

  writeFileSync(`src/${kebabCase}/${kebabCase}.scss`, '', 'utf8');
  console.log(chalk`{green.bold ✔  }${kebabCase}.scss created`);

  writeFileSync(
    `src/${kebabCase}/${titleCase}Component.jsx`,
    componentContent,
    'utf8'
  );
  console.log(chalk`{green.bold ✔  }${titleCase}Component.jsx created`);

  console.log(chalk`
  
{green.bold ✔  ${titleCase} module created sucessfully!}`);
}
