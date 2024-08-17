var express = require("express");
var linePayRouter = express.Router();
linePayRouter.use(express.urlencoded({ extended: false }));
linePayRouter.use(express.json());
var config = require("./databaseConfig.js");
var conn = config.connection;

const linePayConst = {
  VERSION: "v3",
  PROD_SITE: "https://api-pay.line.me/",
  DEV_SITE: "https://sandbox-api-pay.line.me/",
  CHANNEL_ID: "2006017983",
  CHANNEL_SECRET_KEY: "d175ad3e0db191ef3204dc28968f9ffb",
  HOST: "http://localhost:3000",
  CONFIRM_PATH: "/Step4?status=success",
  CANCEL_PATH: "/Step4?status=failed",
};

linePayRouter.post("/", function (req, res) {
  try {
    const { products, total } = req.body;

    const linePayReqBody = {
      1: {
        amount: total,
        currency: "TWD",
        packages: [
          {
            id: "order_1",
            amount: total,
            products,
          },
        ],
      },
      redirectUrls: {
        confirmUrl: linePayConst.HOST + linePayConst.CONFIRM_PATH,
        cancelUrl: linePayConst.HOST + linePayConst.CANCEL_PATH,
      },
    };
  } catch (error) {}
});

module.exports = linePayRouter;
