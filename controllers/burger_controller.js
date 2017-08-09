// import orm.js
var orm = require("../config/orm.js");

// import express
var express = require("express");

// import burger.js
var  burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();

router.get("/", function(request, response){
    response.redirect("/burgers");
});

router.get("/burgers", function(request, response){
    burger.selectAll(function(data){
        var everyBurger = {
            burgers: data
        };
        response.render("index", everyBurger);
    });
});

router.post("/burgers/create", function(request, response){
    burger.insertOne(request.body.burger_name, function() {
        response.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(request, response) {
    var id = request.params.id;
    var devoured = request.body.devoured;
    burger.updateOne(devoured, id, function() {
        response.redirect("/burgers");
    });
});
// Export routes for server.js to use.
module.exports = router;

