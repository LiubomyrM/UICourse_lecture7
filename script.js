"use strict";
/*var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

for (var i = 0; i <= 10; i += 1) {
    document.writeln('// ' + i + ': ' + fibonacci(i));
};*/

/*
var fibonacci = function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}();

for (var i = 0; i <= 10; i += 1) {
    document.writeln('// ' + i + ': ' + fibonacci(i));
};

//call explained
function f(x,y){
    var shift = [].shift;
    shift.call(arguments);
    shift.call(arguments);
    console.log(x);
}
f(1,2,3,4);
*/
//bind() explained
/*var obj = {
    name: 'Vasya',
    hi: function(){
        alert(this.name);
    }
}*/
/*
//function currying
function f(x,y){
    var oldx = x;
    var oldy = y;
    if(!oldy){
        return function(newy){
            return newy+oldx;
        }
    }else{
        return oldx+oldy;
    }
}
*/

var arr = [
    { name: 'a', surname: 'b'},
    { name: 'c', surname: 'd'},
    { name: 'e', surname: 'f'},
    { name: 'g', surname: 'h'},
    { name: 'k', surname: 'l'}
];

var f = (function () {
    var cache = [];
    return function (name, arr) {
        if (!cache[name]) {
            for (var i = 0; i < arr.length; i++) {
                cache[arr[i].name] = arr[i];
            }
        } return cache[name];
    }
})();

console.log(f("a", arr));