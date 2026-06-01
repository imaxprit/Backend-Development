const express = require("express");
const app = express();

// middleware --> response send

// app.use((req, res, next) => {
//     // let {query} = req.query;
//     // console.log(query);
//     console.log("Hi, I am 1st middleware");
//     // res.send("middleware finished");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     return next();
//     console.log("This is after next");
// });

// app.use("/random", (req, res, next) => {
//     console.log("I am only for random");
//     next();
// });

app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if(token === "giveaccess") {
        next();
    }
    res.send("ACCESS DENIED!");
});

app.get("/api", (req, res) => {
    res.send("data");
});

// logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path);
//     next();
// });

// 404
app.use((req, res) => {
    res.send("Page not found");
});

app.get("/", (req, res) => {
    res.send("Hi, i am root");
});

app.get("/random", (req, res) => {
    res.send("This is random page");
});


app.listen(8080, () => {
    console.log("Server listening to port 8080");
});