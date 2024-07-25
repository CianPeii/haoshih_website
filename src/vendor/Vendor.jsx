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
      <div
        className={`p-5 d-flex justify-content-between align-items-center ${styles.head}`}
      >
        <div className="w-100 d-flex justify-content-between align-items-center">
          <div className="w-25">
            <img
              className={styles.vendorImg}
              src="https://rhinoshield.tw/cdn/shop/collections/dttofriends-logo.jpg?v=1701837247"
            />
          </div>
          <div>
            <div className="d-flex align-items-center">
              <h3>攤販名稱</h3>
              <i className="fs-5 bi bi-heart px-3"></i>
            </div>
            <h6>攤販販介紹資料庫有限制字數</h6>
            <div>icon</div>
          </div>
        </div>

        {/* 幻燈片 */}
        {/* <div className="w-25">
          幻燈片
          <div
            id="carouselExampleIndicators"
            className="carousel slide w-25"
            data-bs-ride="carousel"
            data-bs-interval="3000"
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
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://shoplineimg.com/63ea08419b3adf00d260f645/66389a4bc2d49c001418fdc9/3860x.jpg?"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://shoplineimg.com/63ea08419b3adf00d260f645/6420f9e1f1e53400204d75a1/750x.jpg?"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://shoplineimg.com/63ea08419b3adf00d260f645/6420f9e1f1e53400204d75a1/750x.jpg?"
                  className="d-block w-100"
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
        </div> */}
      </div>
    </>
  );
};

export default Vendor;
