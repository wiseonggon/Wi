// return에 의한 클로저의 메모리 해제
var outer = (function () {
    var a = 1;
    var inner = function () {
        return ++a;
    };
    return inner;
})();
console.log(outer());
console.log(outer());
outer = null;