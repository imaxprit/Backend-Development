let n = 5;
let m = 8;

let sum = n + m;

// console.log(sum);
// console.log("Hi, What are you doing?");

// for(let i=0; i<5; i++) {
//     console.log(i);
// }

console.log(process.argv);

let args = process.argv;

for(let i=2; i<args.length; i++) {
    console.log("Welcome ",args[i]);
}

// console.log("All args are right.");