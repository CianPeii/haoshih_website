import styles from "./MemberVenderSideBar.module.scss";
const MemberVenderSideBar = () => {
  return (
    <>
      <div className="p-3 d-flex flex-column align-items-center   ">
        <div className="d-flex flex-column align-items-start">
          <h2 className="mb-5">會員專區</h2>
          <div className={`w-100  ${styles.sideBarSubTitle}`}>
            <h4>會員資料</h4>
            <h4>我要擺攤</h4>
            <h4>
              攤位管理 <span class="bi bi-chevron-down fs-5" />
            </h4>
            <div className="py-1 ps-3 ">
              <h5>攤位資訊</h5>
              <h5>交易設定</h5>
              <h5>商品管理</h5>
            </div>
            <h4>訂單管理</h4>
            <h4>聊天室</h4>
          </div>
        </div>
        <h5>登出</h5>
      </div>
    </>
  );
};

export default MemberVenderSideBar;
