const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended : true }))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : "1a",
        username : "apnacollege",
        content : "I love coding!"
    },
    {
        id : "2b",
        username : "shradhakhapra",
        content : "More Learn, More You Earn"
    },
    {
        id : "3c",
        username : "arpitgupta",
        content : "I got selected in Amazon"
    }, 
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    // console.log(req.body);
    let {username, content} = req.body;
    posts.push({username, content});
    // res.send("post request working");
    res.redirect("/posts"); 
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs", {post});
    // res.send("request working");
});

app.listen(port, () =>  {
    console.log("listening to port : 8080");
});