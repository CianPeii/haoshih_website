var express = require("express");
var linePayRouter = express.Router();
linePayRouter.use(express.urlencoded({ extended: false }));
linePayRouter.use(express.json());
var config = require("./databaseConfig.js");
var conn = config.connection;

linePayRouter.post("/", function (req, res) {
  try {
    console.log(req.body);
  } catch (error) {}
});

module.exports = linePayRouter;
