var express = require("express");
var chatroomRouter = express.Router();
var config = require("./databaseConfig.js");
var conn = config.connection;

chatroomRouter.get("/", function (req, res) {
  res.send("Welcome to the chatroom!");
});

chatroomRouter.get("/messages", function (req, res) {
  // conn.query("SELECT * FROM chat_messages ORDER BY timestamp DESC LIMIT 50", function (err, result) {
  //   if (err) {
  //     res.status(500).json({ error: "Database error" });
  //   } else {
  //     res.json(result);
  //   }
  // });

  // 臨時返回一些模擬數據
  res.json([
    {
      id: 1,
      username: "User1",
      content: "Hello",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: 2,
      username: "User2",
      content: "Hi there!",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
});

module.exports = chatroomRouter;
