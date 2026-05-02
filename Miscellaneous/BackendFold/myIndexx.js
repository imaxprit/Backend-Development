const express = require("express");
const myApp = express();
const port = 8080;

myApp.use(express.urlencoded( {extended : true } ));

myApp.get("/info", (req, res) => {
    let {student, password} = req.query;
    res.send(`Standard GET response, Welcome ${student}`);
});

myApp.post("/info", (req, res) => {
    let {employee, ememployeeId} = req.body;
    res.send(`Standard POST response, Welcome ${employee}`);
});

myApp.listen(port, () => {
    console.log(`listening to port ${port}`);
});