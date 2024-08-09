var express = require("express")
var cartRouter = express.Router()
cartRouter.use(express.urlencoded({ extended: false }));
cartRouter.use(express.json());
var config = require("./databaseConfig.js")
var conn = config.connection

// --------測試路由用----------
// cartRouter.get('/', function(req,res){res.send('OK')})

// cartRouter.get('/test', function(req,res){
//     conn.query("SELECT * FROM member WHERE uid = 1",function(err,result){res.json(result)})
// })
// --------測試路由用----------

//加入購物車
cartRouter.post('/index', function(req, res) {
    conn.query("SELECT * FROM carts WHERE uid = ? AND pid = ?", 
        [req.body.uid, req.body.pid], function(err, results) {
            // console.log(results);
        if (results.length > 0) {
            conn.query("UPDATE carts SET amount = ? WHERE uid = ? AND pid = ?", 
                [req.body.amount, req.body.uid, req.body.pid], function(err, result) {
                if (err) {
                    return res.status(500).send('Update error');
                }
                // res.send('Update OK!');
            });
        } else {
            // 如果紀錄不存在，插入新紀錄
            conn.query("INSERT INTO carts (uid, pid, amount) VALUES (?, ?, ?)", 
                [req.body.uid, req.body.pid, req.body.amount], function(err, result) {
                if (err) {
                    return res.status(500).send('Insert error');
                }
                // res.send('INSERT INTO!');
            });
        }
        // res.redirect('/index/carts');
    });
});

cartRouter.get('/:uid', function(req, res) {
    // const conn = req.app.get('connection') ???????????????????????????????????
    conn.query(
        "SELECT carts.uid, carts.pid, product.name, quantity, price, img01, amount, vendor_info.vinfo, brand_name FROM carts JOIN product ON carts.pid = product.pid JOIN vendor ON product.vid = vendor.vid JOIN vendor_info ON vendor.vinfo = vendor_info.vinfo WHERE uid = ?",
        [req.params.uid],
        function(err, result) {
            // console.log(result);
            res.json(result);
            // res.render('indexcartdetail.ejs',{products: result, turnPrice: turnPrice, total:total});
        }
    )
})

cartRouter.get('/products/:pid/:uid', function(req, res) {
    conn.query(
        "SELECT product.name, quantity, price, img01, vendor_info.vinfo, brand_name FROM product JOIN vendor ON product.vid = vendor.vid JOIN vendor_info ON vendor.vinfo = vendor_info.vinfo WHERE pid = ? ",
        [req.params.pid],
        function(err, result) {
            res.json(result);
        }
    )
})

module.exports = cartRouter