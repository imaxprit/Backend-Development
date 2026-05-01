// const stu1 = {
//     name : "Rahul",
//     age : 25,
//     marks : 78,
//     getMarks : function() {
//         return this.marks;
//     }
// };

// const stu2 = {
//     name : "Arpit",
//     age : 21,
//     marks : 87,
//     getMarks : function() {
//         return this.marks;
//     }
// };

// const stu3 = {
//     name : "Suraj",
//     age : 23,
//     marks : 65,
//     getMarks : function() {
//         return this.marks;
//     }
// }

let arr = [1, 2, 3];
let arr2 = [8, 7, 4];
arr.sayhello = () => {
    console.log("hello i am arr!");
};

arr2.sayhello = () => {
    console.log("hello i am arr2");
};

// function PersonMaker(name, age) {
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1 = PersonMaker("Arpit", 21);

// Constructors - doesn't return anything & start with capital letters
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// };


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);



