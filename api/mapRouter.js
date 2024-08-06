var express = require("express")
var mapRouter = express.Router()
mapRouter.use(express.urlencoded({ extended: false }));
mapRouter.use(express.json());
var config = require("./databaseConfig.js")
var conn = config.connection

// --------測試路由用----------
// mapRouter.get('/', function(req,res){res.send('OK')})

// mapRouter.get('/test', function(req,res){
//     // const conn = req.app.get('connection')
//     conn.query("SELECT brand_name FROM vendor_info WHERE vinfo = 1",function(err,result){res.json(result)})
// })
// --------測試路由用----------

//渲染市集地圖頁面，預設抓vinfo=1的資料
mapRouter.get('/map', function(req, res) {
    const vinfo = req.query.vinfo; 
        conn.query(
            "SELECT * FROM vendor_info WHERE vinfo = ?",
            [vinfo || '1'],  
            function(err, result) {
                if(err) {
                    return res.status(500).send('Database query failed.');
                }
                res.render('map.ejs',{data_from_server: result});
            }
        )
})
//點擊更新資料
mapRouter.get('/data', function(req, res) {
    const vinfo = req.query.vinfo; 
        conn.query(
            "SELECT * FROM vendor_info WHERE vinfo = ?",
            [vinfo],  
            function(err, result) {
                if(err) {
                    return res.status(500).send('Database query failed.');
                }
                res.json({data_from_server: result});
            }
        )
}) 

//我要擺攤
mapRouter.get("/rentVendor", function (req, res) {
    res.render('rentVendor.ejs', {});
})

module.exports = mapRouter
