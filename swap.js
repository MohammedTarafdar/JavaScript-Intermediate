var a = 5;
var b = 10;
console.log("Before swap a:", a, "b=", b);

var tamp = a;
a = b;
b = tamp;
console.log("After swap a:", a, "b=", b);
console.log(" ");


// another way to swap


var x = 20;
var y = 30;
console.log("Before swap x:", x, "y:", y)

x = x + y;  // 20+30=50
y = x - y;  // 50-30 =20
x = x - y;  // 50-20 =30
console.log("After swap x:", x, "y:", y)

// another way to swap

var p = 1;
var q = 2;
console.log("Before swap p:", p, "q=", q);

[p,q] = [q,p];
console.log("After swap p:", p, "q:", q)
console.log(" ");