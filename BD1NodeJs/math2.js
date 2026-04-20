module.exports.sum = (a,b) => a+b;
module.exports.mul = (a,b) => a*b;

const g = 9.8;
const PI = 3.14;

// module.exports = "Hello";

let obj = {
    sum : sum,
    mul : mul,
    g : g,
    PI : pI,
}
module.exports = obj;