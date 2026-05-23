const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'delta_app',
    password: 'Arpit@26sql'
});


let q = "SHOW TABLES";
let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
let user = ["123", "123_newuser", "abc@gmail.com", "abc"];

try {
    connection.query(q, user, (err, result) => {
        if(err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}
connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUser());