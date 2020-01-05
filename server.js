//jshint esversion:6

const express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello world!</h1><br><h2> Welcome to the site </h2>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at this@email.com")
});

app.get("/development", function(req, res) {
    res.send("<ul><li>Flutter</ul></li><ul><li>JavaScript</ul></li><ul><li>Node.JS</ul></li>")
});

app.get("/about", function(req, res) {
    res.send("this company is about..")
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
