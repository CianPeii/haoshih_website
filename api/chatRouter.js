var express = require("express")
var chatRouter = express.Router()
chatRouter.use(express.urlencoded({ extended: false }));
chatRouter.use(express.json());
var config = require("./databaseConfig.js")
var conn = config.connection

// --------測試路由用----------
chatRouter.get('/', function(req,res){res.send('OK')})

chatRouter.get('/test', function(req,res){
    conn.query("SELECT * FROM member WHERE uid = 1",function(err,result){res.json(result)})
})
// --------測試路由用----------

module.exports = chatRouter