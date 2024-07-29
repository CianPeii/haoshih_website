import styles from "./MemberSideBar.module.scss";
const MemberSideBar = () => {
  return (
    <>
      <div className="p-3 d-flex flex-column align-items-center bg-white">
        <div className="d-flex flex-column align-items-start">
          <h2 className="mb-5">會員專區</h2>
          <div className={`w-100 ${styles.sideBarSubTitle}`}>
            <h4>會員資料</h4>
            <h4>我的訂單</h4>
            <h4>按讚攤位</h4>
            <h4>聊天室</h4>
          </div>
        </div>
        <h5>登出</h5>
      </div>
    </>
  );
};

export default MemberSideBar;
