import styles from "./NavBarShop.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBarShop = () => {
  return (
    <>
      <div className="navBarShop">
        <nav className="navbar navbar-expand p-3 bg-white">
          <div className="container-fluid">
            <a href="/">
              <img
                className={styles.logo}
                src="/images/img/logo.png"
                alt="logo"
              />
            </a>

            <div className="d-flex flex-row bg-white">
              <a className="f-center text-decoration-none" href="/shop">
                <h2 className="c-primary">市</h2>
                <h2 className="c-secondary">集</h2>
                <h2 className="c-lake">商</h2>
                <h2 className="c-pink">城</h2>
              </a>
            </div>
            {/* 未登入 ---------------*/}
            {/* <div className={`hover-bg-secondary px-4 ${styles.mallBtn}`}>
              <a className="link-dark text-decoration-none" href="https:">
                登入
              </a>
            </div> */}
            {/* 已登入------------------*/}
            <div
              className={`d-flex flex-row  justify-content-between align-items-center gap-1 ${styles.loginItem}`}
            >
              <div>
                <a
                  className="position-relative text-decoration-none link-dark"
                  href="#"
                >
                  <div className="bi bi-cart h2 "></div>
                  <span
                    className={`c-white rounded-circle  bg-gray c-black fw-bolder cursor-pointerer; ${styles.ShopQuantity}`}
                  >
                    0
                  </span>
                </a>
              </div>

              <a href="http://localhost:3000/vendor/1">
                <div>會員專區</div>
              </a>
              <div>登出</div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBarShop;
