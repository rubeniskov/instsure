# Instsure

[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coverage-badge]][coverage-url]
[![Slack Status][slack-badge]][slack-url]
[![Version][version-badge]][npm-url]
[![Downloads][downloads-badge]][npm-url]
[![Node][node-badge]][npm-url]
[![License][license-badge]][license-url]

[![Issues Open][issues-open-badge]][issues-url]
[![Issue Resolution][issues-reso-badge]][issues-url]

[Instsure][site-url] is a function wrapper to ensure the object initialitation, preventing wrong callings to the constructor function without right context.

[![NPM][npm-img]][npm-url]
[![GRID][coverage-img]][coverage-url]

Installation
============

Install with `npm install instsure --save`.

Usage
=====

To use, add the `require` node module or use browserify if you want to use in a browser:

```JavaScript

    // Wrapper Function

    const Instsure = require('instsure');

    var ConstructorWrapFoo = Instsure(function() {
        this.args = arguments;
        this.context = this;
    });

    ConstructorWrapFoo.prototype.foo = 'bar'

    var instance = new ConstWrapFoo(1,2,3,4),
        // or
        instance = ConstWrapFoo(1,2,3,4),
        // or
        instance = ConstWrapFoo.new([1,2,3,4]);

        console.log(instance.args) // [1,2,3,4];

        console.log(instance instanceof ConstWrapFoo); // true
```


```JavaScript

    // Existing Constructor

    const Instsure = require('instsure');

    var ConstructorFoo = function() {
        this.args = arguments;
        this.context = this;
    };

    ConstructorWrapFoo.prototype.foo = 'bar'

    var instance = new Instsure(ConstructorFoo)(1,2,3,4),
        // or
        instance = Instsure(ConstructorFoo)(1,2,3,4),
        // or
        instance = Instsure(ConstructorFoo).new([1,2,3,4]);

        console.log(instance.args) // [1,2,3,4];

        console.log(instance instanceof ConstructorFoo); // true

        console.log(instance instanceof ConstructorWrapFoo); // true
```

[![WTF][wtfpl-img]][wtfpl-url]

[site-url]: http://instsure.rubeniskov.com

[npm-url]: https://www.npmjs.com/package/instsure
[npm-img]: https://nodei.co/npm/instsure.png?downloads=true

[travis-url]: https://travis-ci.org/rubeniskov/instsure?branch=master
[travis-badge]: https://travis-ci.org/rubeniskov/instsure.svg?style=flat-square

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/license-WTFPL-blue.svg?style=flat-square

[coverage-url]: https://codecov.io/github/rubeniskov/instsure
[coverage-img]: https://codecov.io/gh/rubeniskov/instsure/branch/master/graphs/icicle.svg?width=400&height=72
[coverage-badge]: https://img.shields.io/codecov/c/github/rubeniskov/instsure.svg?style=flat-square

[slack-url]: http://slack.rubeniskov.com/
[slack-badge]: http://slack.rubeniskov.com/badge.svg?style=flat-square&maxAge=2592000

[version-badge]: https://img.shields.io/npm/v/instsure.svg?style=flat-square&maxAge=2592000
[downloads-badge]: https://img.shields.io/npm/dm/instsure.svg?style=flat-square&maxAge=2592000
[node-badge]: https://img.shields.io/node/v/instsure.svg?style=flat-square

[issues-url]: https://github.com/rubeniskov/instsure/issues
[issues-open-badge]: http://isitmaintained.com/badge/open/rubeniskov/instsure.svg
[issues-reso-badge]: http://isitmaintained.com/badge/resolution/rubeniskov/instsure.svg

[wtfpl-url]: http://www.wtfpl.net/
[wtfpl-img]: http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl.svg
