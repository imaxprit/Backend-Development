const express = require("express");
const myApp = express();

console.dir(myApp);

let port = 8080;

myApp.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

// myApp.use((req, res) => {
//     // console.log(res);
//     console.log("request recieved");
//     // res.send("this is a basic response");
//     // res.send ({
//     //     name : "apple",
//     //     color: "red",
//     // });
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>"; 
//     res.send(code);
// });


myApp.get("/", (req, res) => {
    res.send("Hello i am root");
});

// myApp.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// myApp.get("/help", (req, res) => {
//     res.send("you contacted help path");
// });

// myApp.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });

myApp.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    // res.send("Hello I am root");

    let {username, id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}</h1>`
    res.send(htmlStr);
}); 