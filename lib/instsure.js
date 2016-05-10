module.exports = function() {

    var params = Array.prototype.slice.call(arguments, 0),
        _init = false,
        _const = params.splice(-1)[0],
        _args = params.splice(-1)[0],
        _context = params.splice(-1)[0];

    var Instsure = function() {
        return Instsure.new(arguments, this);
    };

    Instsure.new = function(args, context) {
        if (!Instsure.constructorOf(context))
            _init = !!(context = new(Instsure));
        _init && _const.apply(context, args);
        return context;
    };

    Instsure.constructorOf = function(instance) {
        return instance instanceof Instsure;
    };

    Instsure.prototype = Object.create(_const.prototype);

    Instsure.prototype.constructor = Instsure;

    return _context && _args ? Instsure.new(_context, _args) : Instsure;
};
