// let n = 5;

// for(let i=0; i<=n; i++) {
//     console.log("hello", i);
// }

// console.log("Welcome to Apna College");


// console.log(process.argv);   

// let args = process.argv;

// for(let i=0;  i<args.length; i++) {
//     console.log("Hello to ", args[i]);
// }

// const math = require("./math");

// console.log(math);
// console.log(math.sum(7,5));
// console.log(math.mul(4,5));

// const info = require("./Fruits");

// console.log(info);

// const figlet = require("figlet");

// figlet("Arpit", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


import {sum, PI} from "./math.js";
// console.log(sum(1, 2));
// console.log(PI);

import { generate} from "random-words";
console.log(generate());