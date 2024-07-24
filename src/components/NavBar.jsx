import styles from "./NavBar.module.scss";

const data = [
  { id: 1, text: "最新消息", src: "http" },
  { id: 2, text: "攤販類型", src: "http" },
  { id: 3, text: "市集地圖", src: "http" },
  { id: 4, text: "我要擺攤", src: "https" },
]; // 改物件

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <nav className="navbar navbar-expand p-3">
          <div className="container-fluid">
            <a href="https://首頁">
              <img
                className={styles.logo}
                src="images/img/logo.png"
                alt="logo"
              />
            </a>
            <div className="d-flex flex-row">
              {data.map((item) => (
                <a key={item.id} className={styles.navItem} href="https">
                  {item.text}
                </a>
              ))}
            </div>
            <div className={styles.mallBtn}>
              <a className="link-light text-decoration-none" href="https:">
                市集商城
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
