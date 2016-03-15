# typescript-workshops
Code and exercises for TypeScript workshops :mortar_board:

Workshops has been divided into few steps.
Each of step presents some aspect of node.js + angularJS stack application written in TypeScript. 

Both frameworks features and language features are presented - please read commit messages, everything should be stressed there :smirk:

## Exercises
Aims of all exercises (keys are connected to keys in commit messages):

key | what | scope | check diff
------------ | ------------ | ------------- | ---------------- | -------------------------
**E-1** | simple server in node.js | <ul> <li>run node server</li><li>serve static page</li> </ul> | [show diff](http://github.com/michalczukm/typescript-workshops/compare/d2cd1c709b9748902b8e94a502e0e48573c08a0b...76f501f6021cfd535506ceb42b143a89361bb13b)
**E-2** | simple API | <ul> <li>add express.js server</li><li>serve simple resource</li> </ul> | [show diff](http://github.com/michalczukm/typescript-workshops/compare/76f501f6021cfd535506ceb42b143a89361bb13b...3b1efdfdf57f42ad2987e84bf0ced6a32994c796)
**E-3** | business logic | <ul> <li>service</li><li>repositories (little overkill)</li><li>interfaces</li><li>generic interfaces</li></ul> | [show diff](http://github.com/michalczukm/typescript-workshops/compare/3b1efdfdf57f42ad2987e84bf0ced6a32994c796...264754a657b0562d0a0fa3248600e0a0680e86e3)
**E-4** | separate API controllers | <ul> <li>express.js router</li><li>separate controllers for resources</li><li>when to use functions instead of classes</li></ul> | [show diff](http://github.com/michalczukm/typescript-workshops/compare/a43939ca639001715fdda2562d37b75d3dc17cc0...252458e54adf71073b9901e56f631f0164a7e199)
**E-5** | add rich client | <ul> <li>basic angular.js app in TypeScript</li><li>add gulp tasks for client-side</li></ul> | [show diff](http://github.com/michalczukm/typescript-workshops/compare/96d3b5b38a7c5f72f99311e2cb712c4908fa44c1...825a13529b9b1b44299e57118df61a507358abf7)
**E-6** | get data from API in client | <ul> <li>angular controllers</li><li>angular service with $http</li><li>manipulate data</li></ul> | [show diff](http://github.com/michalczukm/typescript-workshops/compare/825a13529b9b1b44299e57118df61a507358abf7...8c09ee489c7d3de46b141b5efffd4eec4e0cdd25)

## State
- [x] E-1
- [x] E-2
- [x] E-3
- [x] E-4
- [x] E-5
- [x] E-6

# How to run
## Install environment and packages managers
Node.js
* please install at least 4.x version, 5.x is recommended

All dependencies are managed by appropriate managers. 

Following instruction shows how to install those package managers globally. If you want to use only local versions of managers - just point the local distribution in `node_modules`.

Install gulp: `npm install gulp -g`

Install bower: `npm install bower -g`

Install typings: `npm install typings -g`

## Install project dependencies
Go to project root directory and run
```
npm install & bower install & typings install
```

or run those commands separate if you have any problems.

## Run project
Go to project root directory and run
```
gulp serve
```
And the magic happens :sparkles:

There's watch included in this task so all your changes will automatically reflect in your running application.

The application runs by default on `localhost:8000` - you can change it in `app.ts` file.