const express = require("express");
const myApp = express();

console.dir(myApp);

let port = 8080;

myApp.listen(port, () => {
    console.log(`app listening on port ${port}`);
});