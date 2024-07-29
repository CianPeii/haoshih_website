import styles from "./NavBarShop.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBarShop = () => {
  return (
    <>
      <div className="navBarShop">
        <nav className="navbar navbar-expand p-3 bg-white">
          <div className="container-fluid">
            <a href="https://首頁">
              <img
                className={styles.logo}
                src="images/img/logo.png"
                alt="logo"
              />
            </a>
            <div className="d-flex flex-row bg-white">
              <h2 className="c-primary">市</h2>
              <h2 className="c-secondary">集</h2>
              <h2 className="c-lake">商</h2>
              <h2 className="c-pink">城</h2>
            </div>

            {/* 未登入 ---------------*/}
            {/* <div className={styles.mallBtn}>
              <a className="link-dark text-decoration-none" href="https:">
                登入
              </a>
            </div> */}
            {/* 已登入------------------*/}
            <div
              className={`d-flex flex-row  justify-content-between align-items-center ${styles.loginItem}`}
            >
              <div>
                <div className="container">
                  <a
                    className="position-relative text-decoration-none link-dark"
                    href="#"
                  >
                    <div className="bi bi-cart fs-2"></div>
                    <span
                      className={`c-white rounded-circle  bg-gray c-black fw-bolder cursor-pointer;
 ${styles.ShopQuantity}`}
                    >
                      0
                    </span>
                  </a>
                </div>
              </div>
              <div className="mx-2">煞氣a明</div>
              <div>登出</div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBarShop;
