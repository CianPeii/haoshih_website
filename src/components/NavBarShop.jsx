import styles from "./NavBarShop.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import axios from 'axios';


const NavBarShop = ({cartVisible}) => {
  const [productsData, setProductsData] = useState({});
  // console.log("cartVisible",cartVisible);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // 檢查 localStorage 是否存在指定的 key
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('User data from localStorage:', user);
    if (user) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  }, []); // 空陣列表示只在組件掛載時執行一次

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  
  
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get("http://localhost:3200/carts/2");
        setProductsData(response.data);
        // console.log("Products Data:", response.data);
      } catch (error) {
        console.error("Error fetching Products Data:", error);
      }
    };
    fetchProductsData();
  }, []);
  // console.log(productsData);
  // console.log(Object.keys(productsData).length);
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
            {showLogin ? (
        <div
          className={`d-flex flex-row justify-content-between align-items-center gap-1 ${styles.loginItem}`}
        >
          <div id="123" style={{ display: cartVisible ? "visible" : "none" }}>
            <a
              className="position-relative text-decoration-none link-dark"
              href="/ShopCart"
            >
              <div className="bi bi-cart h2 "></div>
              <span
                className={`c-white rounded-circle bg-gray c-black fw-bolder cursor-pointer ${styles.ShopQuantity}`}
              >
                {Object.keys(productsData).length}
              </span>
            </a>
          </div>
          <a
            className="text-decoration-none c-black"
            href="http://localhost:3000/vendor/1"
          >
            <div>會員專區</div>
          </a>
          <div>登出</div>
        </div>
      ) : (
        <div className={`hover-bg-secondary px-4 ${styles.mallBtn}`}>
          <a className="link-dark text-decoration-none" href="https:">
            登入
          </a>
        </div>
      )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBarShop;
