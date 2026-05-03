const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4 : uuidv4 } = require('uuid');
  //⇨ 'ab16e731-6cee-424d-81a0-5929e9bdb0cc' 

app.use(express.urlencoded({ extended : true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        username : "apnacollege",
        content : "I love coding!"
    },
    {
        id : uuidv4(),
        username : "shradhakhapra",
        content : "More Learn, More You Earn"
    },
    {
        id : uuidv4(),
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
    let newId = uuidv4();
    posts.push({newId, username, content});
    // res.send("post request working");
    res.redirect("/posts"); 
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs", {post});
    // res.send("request working");
});

app.patch("/posts/:id", (req, res) => {
    let { newId } = req.params;
    console.log(id);
    res.send("patch request working");
});

app.listen(port, () =>  {
    console.log("listening to port : 8080");
});