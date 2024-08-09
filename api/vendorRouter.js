const express = require("express");
const vendorRouter = express.Router();
const {
  hashPW,
  queryAsync,
  updateVendorProfile,
  updateVendorPayment,
} = require("../src/utils/utils.js");
var config = require("./databaseConfig.js");
var conn = config.connection;

// --------測試路由用----------
// vendorRouter.get('/', function(req,res){res.send('OK')})

// vendorRouter.get('/test', function(req,res){
//     conn.query("SELECT * FROM member WHERE uid = 1",function(err,result){res.json(result)})
// })
// --------測試路由用----------

vendorRouter.get("/", (req, res) => {
  res.send("vendor page");
});

// 會員資料 API
vendorRouter.get("/profile/:vid", (req, res) => {
  conn.query(
    "SELECT * FROM vendor WHERE vid = ?",
    [req.params.vid],
    (err, result) => {
      res.json(result[0]);
    }
  );
});

// 編輯會員資料 --React--
vendorRouter.put("/profile/:vid", async (req, res) => {
  try {
    const { first_name, last_name, phone, email, address, password } = req.body;
    const vid = req.params.vid;

    // 有被填寫的欄位才會傳入 value
    let updateFields = {};
    if (first_name) updateFields.first_name = first_name;
    if (last_name) updateFields.last_name = last_name;
    if (phone) updateFields.phone = phone;
    if (email) updateFields.email = email;
    if (address) updateFields.address = address;
    // 有被填寫的密碼才會被雜湊加密並傳入
    if (password) {
      var hashedPW = await hashPW(password);
      updateFields.password = hashedPW;
    }

    // 假如有欄位被填寫才會 update到資料庫，否則就是回到原畫面
    if (Object.keys(updateFields).length > 0) {
      await updateVendorProfile(conn, vid, updateFields);
      res.status(200).json({
        message: "Profile updated successfully",
        updatedFields: Object.keys(updateFields),
      });
    } else {
      res.status(200).json({ message: "No fields to update" });
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).send("An error occurred while updating the profile");
  }
});

// 攤位資訊 API http://localhost:3200/vendor/info/:vid
vendorRouter.get("/info/:vid", async (req, res) => {
  try {
    const stallInfoQuery = `
    SELECT vi.*, v.vid 
    FROM vendor AS v 
    INNER JOIN vendor_info 
    AS vi ON vi.vinfo = v.vinfo 
    WHERE vid = ?`;

    // 取得資料庫資料
    const stallInfo = await queryAsync(conn, stallInfoQuery, [req.params.vid]);
    // res.json(stallInfo[0]);

    if (stallInfo.length === 0) {
      return res.status(404).json({ error: "Vendor not found" });
    }

    // 處理圖片
    const convertImgToBase64 = (img) => {
      if (img) {
        if (Buffer.isBuffer(img)) {
          // 如果是 Buffer，轉換為 Base64
          img = `data:image/jpeg;base64,${img.toString("base64")}`;
        } else if (typeof img === "string") {
          // 如果已經是字串，檢查是否需要添加前綴
          if (!img.startsWith("data:image/")) {
            img = `data:image/jpeg;base64,${img}`;
          }
        } else {
          // 如果是其他類型，設置為 null
          console.log("Unexpected image data type");
          img = null;
        }
      } else {
        img = null;
      }
      return img;
    };

    const convertedImages = Object.entries(stallInfo[0]).reduce(
      (acc, [key, value]) => {
        if (key.includes("img")) {
          acc[key] = convertImgToBase64(value);
        }
        return acc;
      },
      {}
    );

    // 處理類型
    function getCategoryText(category) {
      switch (category) {
        case "pet":
          return "寵物";
        case "food":
          return "美食";
        case "accessories":
          return "飾品";
        case "clothing":
          return "服飾";
        case "handmade":
          return "手作";
        case "others":
          return "其他";
        default:
          return "其他";
      }
    }

    const formattedStallInfo = {
      ...stallInfo[0],
      ...convertedImages,
      brand_type: getCategoryText(stallInfo[0].brand_type),
    };

    res.json(formattedStallInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fail to provide data" });
  }
});

// 交易設定 API
vendorRouter.get("/bankInfo/:vid", (req, res) => {
  conn.query(
    "SELECT bank_code, bank_account FROM vendor WHERE vid = ?",
    [req.params.vid],
    (err, result) => {
      res.json(result[0]);
    }
  );
});

// 編輯交易設定
vendorRouter.put("/bankInfo/:vid", async (req, res) => {
  try {
    const { bank_code, bank_account } = req.body;
    const vid = req.params.vid;

    // 有被填寫的欄位才會傳入 value
    let updateFields = {};
    if (bank_code) updateFields.bank_code = bank_code;
    if (bank_account) updateFields.bank_account = bank_account;

    // 假如有欄位被填寫才會 update到資料庫，否則就是回到原畫面
    if (Object.keys(updateFields).length > 0) {
      await updateVendorPayment(conn, vid, updateFields);
      res.status(200).json({
        message: "Bank Information updated successfully",
        updatedFields: Object.keys(updateFields),
      });
    } else {
      res.status(200).json({ message: "No fields to update" });
    }
  } catch (error) {
    console.error("Error updating bankInfo:", error);
    res.status(500).send("An error occurred while updating the bankInfo");
  }
});

module.exports = vendorRouter;
