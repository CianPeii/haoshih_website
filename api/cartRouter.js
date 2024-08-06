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

// 加入購物車
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
        res.redirect('/index/carts');
    });
});


cartRouter.get('/:uid', function(req, res) {
    const conn = req.app.get('connection')
    conn.query(
        "SELECT carts.uid, carts.pid, product.name, quantity, price, img01, amount FROM carts JOIN product on carts.pid = product.pid where uid = ?",
        [req.params.uid],
        function(err, result) {
            // console.log(result);
            const total = calculateTotal(result);
            res.render('indexcartdetail.ejs',{products: result, turnPrice: turnPrice, total:total});
        }
    )
})

function turnPrice(price) {
    return Number(price).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
    });
}

function calculateTotal(products) {
    let total = 0;
    products.forEach(product => {
        total += product.amount * product.price;
    });
    return total;
}

// function updateTotal() {
//     let total = 0;
//     // 選取所有的 .subtotal 元素
//     const subtotals = document.querySelectorAll('.subtotal');
//     // 遍歷每個 .subtotal 元素
//     subtotals.forEach(function(element) {
//         // 獲取文本內容並移除非數字字符
//         let priceText = element.textContent.replace(/[^\d]/g, '');
//         // 將處理後的文本轉換為整數並加到總金額中
//         total += parseInt(priceText, 10);
//     });
//     // 更新 #totalPrice 元素的文本
//     document.getElementById('totalPrice').textContent = '總金額 : ' + turnPrice(`${total}`) + '元';
// }

// function updateTotal(products) {
//     let total = 0;
//     console.log(products);
//     products.forEach(product => {
//         total += product.amount * product.price;
//     });
//     return total;
// }



module.exports = cartRouter