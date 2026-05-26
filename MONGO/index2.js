const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/page');
}

const personSchema = new mongoose.Schema({
    name : String,
    post : String,
    age : Number,
    salary : Number,
});

const person = mongoose.model("Person", personSchema);

// const person2 = new person({
//     name : "Rahul Gurung",
//     post : "FCU Executive",
//     age : 32,
//     salary : 55000,
// });

// person2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

person.insertMany([
    {name: "Anmol", post: "MechanicalEg", age: 16, salary: 37500},
    {name: "Kanak", post: "Accountant", age: 18, salary: 40000},
    {name: "Yashi", post: "GNM", age: 20, salary: 42000},
]);

person.find({age: {$gt: 20}})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })



