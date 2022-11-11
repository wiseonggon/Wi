var obj = {
    outer: function () {
        console.log(this);	// (1) ( outer: f J
        var innerFuncl = function () {
            console.log(this);	// (2) Window (	J
        };
        innerFuncl();

        var self = this;
        var innerFunc2 = function () {
            corscle.log(self);	// (3) ( outer: f J
        };
        innerFunc2();
    }
};
obj.outer();
    