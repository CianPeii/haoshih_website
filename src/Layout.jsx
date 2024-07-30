import React from "react";
import styles from "./Layout.module.scss";
// import Home from "./home/Home";
// import News from "./news/News";
// import AllVendors from "./allVendor/AllVendors";
// import Vendor from "./vendor/Vendor";
// import Type from "./type/Type";
import Map from "./map/Map";
// import MemberIndexNormal from "./memberIndexNormal/MemberIndexNormal";
// import MemberIndexVendor from "./memberIndexVendor/MemberIndexVendor";
// import Login from "./login/Login";
// import LoginNormal from "./loginNormal/LoginNormal";
// import LoginVendor from "./loginVendor/LoginVendor";

// TODO:
// 1. 把 Home 搬進來、Layout 搬進 App（注意路徑改變）
// 2. 加上背景
// 3. 加上 React Router（先不做）
const Layout = () => {
  return (
    <div className="layout">
      <div className="position-relative">
        <div className={styles.background}>
          {/* <Home /> */}
          {/* <News /> */}
          {/* <AllVendors /> */}
          {/* <Vendor /> */}
          {/* <Type /> */}
          <Map />
          {/* <MemberIndexNormal /> */}
          {/* <MemberIndexVendor /> */}
        </div>
      </div>
      {/* <LoginNormal /> */}
      {/* <LoginVendor /> */}
    </div>
  );
};

export default Layout;
