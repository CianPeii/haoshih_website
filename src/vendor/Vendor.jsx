import NavBarShop from "../components/NavBarShop";
import styles from "./Vendor.module.scss";
import { useEffect } from "react";
import { Carousel } from "bootstrap";

function YourComponent() {
  useEffect(() => {
    const carouselElement = document.querySelector(
      "#carouselExampleIndicators"
    );
    const carousel = new Carousel(carouselElement, {
      interval: 3000, // 自動播放間格
      wrap: true, // 是否循環播放
    });

    return () => {
      carousel.dispose(); // 组件卸載清理
    };
  }, []);
}

const Vendor = () => {
  return (
    <>
      <NavBarShop />
      {/* vendorHead */}
      <div
        className={`p-3 d-flex justify-content-center align-items-center d-grid gap-4 ${styles.head}`}
      >
        <div className="w-100 d-flex align-items-center d-grid gap-3">
          <div className=" w-25">
            <img
              className={styles.vendorImg}
              src="https://rhinoshield.tw/cdn/shop/collections/dttofriends-logo.jpg?v=1701837247"
            />
          </div>
          <div className=" w-75">
            <div className="d-flex align-items-center">
              <h3>攤販名稱</h3>
              <i className="fs-5 bi bi-heart px-3"></i>
            </div>
            <p>
              攤販販介紹資料庫有限制字數攤販販介紹資料庫有限制字數攤販販介紹資料庫有限制字數
              攤販販介紹資料庫有限制字數
              攤販販介紹資料庫有限制字數攤販販介紹資料庫有限制字數攤販販介紹資料庫有限制字數攤販販介紹資料庫有限制字數
            </p>
            <div className=" d-flex justify-content-end fs-5 d-grid gap-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram "></i>
              <i className="bi bi-globe"></i>
            </div>
          </div>
        </div>

        {/* 輪播圖 */}
        <div className={`w-100 ${styles.carousel}`}>
          <div
            id="carouselExampleIndicators"
            className="carousel slide w-100"
            data-bs-ride="carousel"
            data-bs-interval="3000" //控制播放
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img
                  src="https://img.shoplineapp.com/media/image_clips/65d469e5d9c0de4d368479df/original.jpg?1708419556"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.shoplineapp.com/media/image_clips/65d4540c2d35da001728d489/original.jpg?1708413963"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://shoplineimg.com/63ea08419b3adf00d260f645/66389b952935cb00147d9b78/1296x.webp?source_format=jpg"
                  className="d-block w-100 "
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* 下拉選單 */}
      <div className="dropdown text-end my-3 mx-5">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          最新上架
        </button>
        <ul
          className="dropdown-menu  text-center"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <a className="dropdown-item" href="#">
              最新上架
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              價格高 → 低
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              價格高 → 低
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Vendor;
