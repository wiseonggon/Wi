var obh = {
    outer: function () {
        console.log(this);
        var innerFunc = function () {
            console.log(this);
        };
        innerFunc.call(this);
    }
};
obj.outer();