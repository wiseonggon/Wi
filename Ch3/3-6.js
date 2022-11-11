var func = function (x) {
    console.log(this,x);
};
func(1);

var obj = {
    method: func
};
obh.method(2);