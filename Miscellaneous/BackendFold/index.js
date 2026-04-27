const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req, res) => {
    res.send("Standard GET response");
});

app.post("/register", (req, res) => {
    res.send("Standard POST response");
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});