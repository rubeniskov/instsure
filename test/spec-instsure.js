var expect = require("chai").expect;
var Instsure = require("../lib/instsure");

describe('Instsure', function() {

    var ConstWrapFoo, ConstWrapBar,
        ConstInlineFoo, ConstInlineBar,
        instFooNew, instBarNew,
        instFooCall, instBarCall,
        instFooNewMethod, instBarNewMethod;

    function ConstFoo() {
        this.args = arguments;
        this.context = this;
    };

    function ConstBar() {
        this.args = arguments;
        this.context = this;
    };

    ConstBar.prototype.bar = ConstFoo.prototype.foo = function(name) {
        return this[name];
    };

    ConstWrapFoo = Instsure(function() {
        this.args = arguments;
        this.context = this;
    });

    ConstWrapBar = Instsure(function() {
        this.args = arguments;
        this.context = this;
    });

    ConstWrapBar.prototype.bar = ConstWrapFoo.prototype.foo = function(name) {
        return this[name];
    };

    ConstInlineFoo = Instsure(ConstFoo);

    ConstInlineBar = Instsure(ConstBar);

    describe('#wrap', function() {

        beforeEach(function() {
            instFooNew = new ConstWrapFoo('foo', 'bar');
            instBarNew = new ConstWrapBar('bar', 'foo');
            instFooCall = ConstWrapFoo('foo', 'bar');
            instBarCall = ConstWrapBar('bar', 'foo');
            instFooNewMethod = ConstWrapFoo.new(['foo', 'bar']);
            instBarNewMethod = ConstWrapBar.new(['bar', 'foo']);
        });

        it('should instantiate constructor with normal "new" way', function() {
            expect(instFooNew).to.be.an.instanceof(ConstWrapFoo);
            expect(instBarNew).to.be.an.instanceof(ConstWrapBar);
            expect(instFooNew).not.to.be.an.instanceof(ConstWrapBar);
            expect(instBarNew).not.to.be.an.instanceof(ConstWrapFoo);
        });

        it('should instantiate constructor with a regular call', function() {
            expect(instFooCall).to.be.an.instanceof(ConstWrapFoo);
            expect(instBarCall).to.be.an.instanceof(ConstWrapBar);
            expect(instFooCall).not.to.be.an.instanceof(ConstWrapBar);
            expect(instBarCall).not.to.be.an.instanceof(ConstWrapFoo);
        });

        it('should instantiate constructor by the method new', function() {
            expect(instFooNewMethod).to.be.an.instanceof(ConstWrapFoo);
            expect(instBarNewMethod).to.be.an.instanceof(ConstWrapBar);
            expect(instFooNewMethod).not.to.be.an.instanceof(ConstWrapBar);
            expect(instBarNewMethod).not.to.be.an.instanceof(ConstWrapFoo);
        });

        it('should be same Constructors', function() {

            expect(instFooNew.constructor).to.equal(ConstWrapFoo);
            expect(instFooCall.constructor).to.equal(ConstWrapFoo);
            expect(instFooNewMethod.constructor).to.equal(ConstWrapFoo);

            expect(instBarNew.constructor).to.equal(ConstWrapBar);
            expect(instBarCall.constructor).to.equal(ConstWrapBar);
            expect(instBarNewMethod.constructor).to.equal(ConstWrapBar);

            expect(instFooNew.constructor).not.to.equal(instBarNew.constructor);
            expect(ConstWrapFoo).not.to.equal(instBarNew.constructor);
        });

        it('should be different Instances with right arguments', function() {

            expect(instFooNew).not.to.equal(instFooCall);
            expect(instFooCall).not.to.equal(instFooNewMethod);

            expect(instBarNew).not.to.equal(instBarCall);
            expect(instBarCall).not.to.equal(instBarNewMethod);

            expect(instFooNew.foo('args')[0]).equal(instBarNew.bar('args')[1]);
            expect(instFooCall.foo('args')[1]).equal(instBarCall.bar('args')[0]);
            expect(instFooNewMethod.foo('args')[0]).equal(instBarNewMethod.bar('args')[1]);
        });
    });

    describe('#inline', function() {

        beforeEach(function() {
            instFooNew = new ConstInlineFoo('foo', 'bar');
            instBarNew = new ConstInlineBar('bar', 'foo');
            instFooCall = ConstInlineFoo('foo', 'bar');
            instBarCall = ConstInlineBar('bar', 'foo');
            instFooNewMethod = ConstInlineFoo.new(['foo', 'bar']);
            instBarNewMethod = ConstInlineBar.new(['bar', 'foo']);
        });

        it('should be instance of inline declaration constructor', function() {

            expect(instFooNew).to.be.an.instanceof(ConstFoo);
            expect(instBarNew).to.be.an.instanceof(ConstBar);

            expect(instFooCall).to.be.an.instanceof(ConstFoo);
            expect(instBarCall).to.be.an.instanceof(ConstBar);

            expect(instFooNewMethod).to.be.an.instanceof(ConstFoo);
            expect(instBarNewMethod).to.be.an.instanceof(ConstBar);

            expect(instFooNew).to.be.an.instanceof(ConstInlineFoo);
            expect(instBarNew).to.be.an.instanceof(ConstInlineBar);

            expect(instFooCall).to.be.an.instanceof(ConstInlineFoo);
            expect(instBarCall).to.be.an.instanceof(ConstInlineBar);

            expect(instFooNewMethod).to.be.an.instanceof(ConstInlineFoo);
            expect(instBarNewMethod).to.be.an.instanceof(ConstInlineBar);
        });
    });
});
