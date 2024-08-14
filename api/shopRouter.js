var express = require("express");
var shopRouter = express.Router();
shopRouter.use(express.urlencoded({ extended: false }));
shopRouter.use(express.json());
var config = require("./databaseConfig.js");
var conn = config.connection;
const { queryAsync } = require("../src/utils/utils.js");

// --------測試路由用----------
// shopRouter.get('/', function(req,res){res.send('OK')})

// shopRouter.get('/test', function(req,res){
//     conn.query("SELECT * FROM member WHERE uid = 1",function(err,result){res.json(result)})
// })
// --------測試路由用----------

// 所有攤販類型
shopRouter.get("/", function (req, res) {
  conn.query("select * from vendor_info", function (err, result) {
    res.json(result);
  });
});

shopRouter.get("/vendor/:id", function (req, res) {
  conn.query(
    "select * from vendor_info where vinfo = ?",
    [req.params.id],
    function (err, result) {
      res.json(result);
    }
  );
});

// 切換特定攤販類型
shopRouter.get("/:type", function (req, res) {
  conn.query(
    "select * from vendor_info where brand_type = ?",
    [req.params.type],
    function (err, result) {
      res.json(result);
    }
  );
});

// 取得該攤販的商品
shopRouter.get("/:vinfo/products", function (req, res) {
  conn.query(
    "select * from product where vid = ?",
    [req.params.vinfo],
    function (err, result) {
      res.json(result);
    }
  );
});

// 取得單件商品
shopRouter.get("/product/:pid", function (req, res) {
  conn.query(
    "select * from product where pid = ?",
    [req.params.pid],
    function (err, result) {
      res.json(result);
    }
  );
});

// 按讚收藏
shopRouter.get("/like/:uid", async function (req, res) {
  try {
    const heartQuery = `
        SELECT * FROM heart WHERE uid = ?
    `;
    const likes = await queryAsync(conn, heartQuery, [req.params.uid]);
    // console.log(`likes: ${JSON.stringify(likes)}`);

    if (likes.length === 0 || !likes[0].list) {
      return res.json({
        uid: req.params.uid,
        likes: likes,
      });
    }

    const likesNumArr = likes[0]["list"].split(",").map(Number);
    // console.log(`likesNumArr: ${likesNumArr}`); // 1,2
  } catch (error) {
    console.error("Error in /shop/like/:uid:", error);
    res.status(500).send("Internal Server Error");
  }
});

// 加入購物車(目前在cartRouter，路徑還未處理)

module.exports = shopRouter;
