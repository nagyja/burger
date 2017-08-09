// import orm.js
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(name, cb) {
    orm.insertOne(name, function(res) {
      cb(res);
    });
  },
  updateOne: function(devoured, id, cb) {
    orm.updateOne(devoured, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;