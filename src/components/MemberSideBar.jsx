import styles from "./MemberSideBar.module.scss";
const MemberSideBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  
  return (
    <>
      <div className="p-3 d-flex flex-column align-items-center font-special ">
        <div className="d-flex flex-column align-items-start">
          <h1 className="mb-5 fs-1">會員專區</h1>
          <div className={`w-100 ${styles.sideBarSubTitle}`}>
            <a
              className="text-decoration-none c-black"
              href={`http://localhost:3000/${user.nickname ? "member" : "vendor"}/${user.nickname ? user.uid : user.vid}`}
            >
              <h4>會員資料</h4>
            </a>
            <a
              className="text-decoration-none c-black"
              href="http://localhost:3000/member/1/order"
            >
              <h4>我的訂單</h4>
            </a>
            <a
              className="text-decoration-none c-black"
              href="http://localhost:3000/member/1/like"
            >
              <h4>按讚攤位</h4>
            </a>
            <h4>
              <a className="text-decoration-none c-black" href="/chatroom">
                聊天室
              </a>
            </h4>
          </div>
        </div>
        <h5>登出</h5>
      </div>
    </>
  );
};

export default MemberSideBar;
