(function(name, ctx, define) {
    var module = define.call(ctx);
    typeof modules === 'object'?
        modules.define(name, function(provide) { provide(module); }) :
        (ctx[name] = module);
}('mocha', this, function() {

/*borschik:include:__v1-21/mocha__v1-21.js*/;
return this.mocha;

}));
