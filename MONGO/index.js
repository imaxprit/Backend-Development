const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// Insert in Mongoose

// const user2 = new User({
//     name: "Eve",
//     email: "eve@google.com",
//     age: 38,
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     }) 
//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Bruce", email: "bruce@gmail.com", age: 47},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
// ]).then((res) => {
//     console.log(res);
// });

// Find in Mongoose

// User.findOne({age: {$gte: 48}})
// User.findOne({_id: '6a13df05950efdd653e00f77'})
// User.findById('6a13df05950efdd653e00f77')
//     .then((res) => {
//         // console.log(res[0].name);
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Update in Mongoose

// User.updateOne({name: "Peter"}, {age: 35})
// User.updateMany({age: {$gte: 48}}, {age: 54})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// findAndUpdate in Mongoose

// User.findOneAndUpdate({name: "Peter"},{age: 42})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// Delete in Mongoose

// User.deleteOne({name: "Adam"}).then((res) => {
//     console.log(res);
// });

// User.deleteMany({age: {$gt: 45}}).then((res) => {
//     console.log(res);
// });

// findbyIdDelete
// User.findByIdAndDelete('6a13dcf23a980381a92a404c')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// findOneANDdelete

User.findOneAndDelete({name: "Peter"})
    .then((res) => {
        console.log(res);
    }) 
    .catch((err) => {
        console.log(err);
    });