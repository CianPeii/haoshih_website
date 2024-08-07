var express = require("express")
var shopRouter = express.Router()
shopRouter.use(express.urlencoded({ extended: false }));
shopRouter.use(express.json());
var config = require("./databaseConfig.js")
var conn = config.connection

// --------測試路由用----------
// shopRouter.get('/', function(req,res){res.send('OK')})

// shopRouter.get('/test', function(req,res){
//     conn.query("SELECT * FROM member WHERE uid = 1",function(err,result){res.json(result)})
// })
// --------測試路由用----------


shopRouter.get("/",function (req,res) {
    conn.query('select * from vendor_info',function (err, result) {
        res.json(result)
    })
})

module.exports = shopRouter