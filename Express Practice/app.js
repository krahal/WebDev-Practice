const express = require("express");

const app = express();

// "/" route
app.get('/', function (req, res) {
    res.send("Hi there");
});

// "/goodbye" route
app.get("/goodbye", function(req, res) {
    res.send("<h1>GOODBYE</h1>");
});

// "dog" route
app.get("/dog", function(req, res) {
    res.send("Dogs are the best");
})

// Tell Express to listen for requests (Start server)
app.listen(3000, function() {
    console.log("Starting Express server");
});