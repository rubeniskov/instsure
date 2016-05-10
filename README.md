# Instsure

[![Build Status][travis-img]][travis-url]
[![License][license-img]][license-url]
[![Coverage Status][coverage-img]][coverage-url]

Instsure is a function wrapper to ensure the object initialitation, preventing wrong callings to the constructor function without right context.

[![NPM][npm-img]][npm-url]

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



[site-url]: https://github.com/rubeniskov/instsure

[npm-url]: https://www.npmjs.com/package/instsure
[npm-img]: https://nodei.co/npm/instsure.png?downloads=true

[travis-url]: https://travis-ci.org/rubeniskov/instsure?branch=master
[travis-img]: https://travis-ci.org/rubeniskov/instsure.svg?style=flat-square

[license-url]: LICENSE.md
[license-img]: http://img.shields.io/npm/l/sassdoc.svg?style=flat-square

[coverage-img]: https://coveralls.io/repos/rubeniskov/instsure/badge.svg?branch=master&service=github
[coverage-url]: https://coveralls.io/github/rubeniskov/instsure?branch=master
