const express = require("express");
const myApp = express();

console.dir(myApp);

let port = 8080;

myApp.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

myApp.use((req, res) => {
    // console.log(res);
    console.log("request recieved");
    // res.send("this is a basic response");
    // res.send ({
    //     name : "apple",
    //     color: "red",
    // });
    let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>"; 
    res.send(code);
});
