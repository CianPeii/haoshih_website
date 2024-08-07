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

// 所有攤販類型
shopRouter.get("/",function (req,res) {
    conn.query('select * from vendor_info',function (err, result) {
        res.json(result)
    })
})

// 切換特定攤販類型
shopRouter.get("/:type",function (req,res) {
    conn.query('select * from vendor_info where brand_type = ?',[req.params.type],function (err, result) {
        res.json(result)
    })
})

// 取得該攤販的商品
shopRouter.get('/:vinfo/products',function (req,res) {
    conn.query('select * from product where vid = ?',[req.params.vinfo],function (err, result) {
        res.json(result)
    })
})

// 取得單件商品
shopRouter.get("/product/:pid",function (req, res) {
    conn.query('select * from product where pid = ?',[req.params.pid],function (err, result) {
        res.json(result)
    })
})

// 加入購物車(目前在cartRouter，路徑還未處理)

module.exports = shopRouter