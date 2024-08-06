var express = require("express");
var cors = require("cors");
var app = express();
app.listen(3200);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// 連接mysql
// var mysql = require("mysql");
// var conn = mysql.createConnection({
//   user: "root",
//   password: "",
//   host: "localhost",
//   port: 3306,
//   database: "tododb"
// });

// conn.connect((err) => {
//   if (err) {
//     console.log("MySQL連線失敗");
//     return;
//   } else {
//     console.log("MySQL連線成功");
//   }
// });

// app.set('connection', conn)

var cartRouter = require("./cartRouter.js")
app.use("/carts", cartRouter)

// var loginRouter = require("./loginRouter.js")
// app.use("/login", loginRouter)

var mapRouter = require("./mapRouter.js")
app.use("/map", mapRouter)

// var memberRouter = require("./memberRouter.js")
// app.use("/member", memberRouter)

// var shopRouter = require("./shopRouter.js")
// app.use("/shop", shopRouter)

// var vendorRouter = require("./vendorRouter.js")
// app.use("/vendor", vendorRouter)