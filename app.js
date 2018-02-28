var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/api/cars", function(req, res) {
    var carObj = [
        {
            make: "Volkswagen",
            model: "Passat"
        },
        {
            make: "Mercedes Benz",
            model: "E420"
        },
        {
            make: "Madza",
            model: "RX7"
        },
        {
            make: "Honda",
            model: "Civic SE"
        }
    ];
        res.send(carObj);
    });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});