const emp1 = {
    name : "Arpit",
    age : 21,
    empId : 121,
    getInfo : function() {
        console.log(`This is ${this.name}`);
    },
};

const emp2 = {
    name : "Amit",
    age : 25,
    empId : 124,
    getInfo : function() {
        console.log(`This is ${this.name}`);
    }
}

let arr = [2, 4, 6, 8];
let arr2 = [1, 3, 5, 7];

arr.sayGreet = () => {
    console.log("Good Morning !");
};

arr2.sayGreet = () => {
    console.log("Good Afternoon !");
};

function PersonMaker(name, age) {
    const person = {
        name : name,
        age : age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}