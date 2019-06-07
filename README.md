# Create React Redux Module [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/vnoitkumar/create-react-redux-module/pulls)

Create React Redux Module which creates a moduls in secs.

## Installation

Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):

```bash
npm install -g create-react-redux-module
```

And create-react-redux-module will be installed globally to your system path.

You can also install create-react-redux-module as a development dependency:

```bash
npm install --save-dev create-react-redux-module
```

If you don't want to install it in your local machine, you can try this in your project's root directory

```bash
npx create-react-redux-module user-profile
```

## Quick Overview

Give the below mentioned command in your react project's root directory

```sh
create-react-redux-module user-profile
```

It will create a directory called `user-profile` inside the `scr` folder.
Inside that directory, it will generate the initial redux module structure:

```sh
src
└── user-profile
  ├── user-profile.scss
  ├── UserProfile-spec.js
  ├── UserProfileAction.js
  ├── UserProfileComponent.jsx
  ├── UserProfileConstant.js
  ├── UserProfileContainer.js
  └── userProfileReducer.js
```
