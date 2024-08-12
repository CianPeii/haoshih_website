import { useState, useEffect } from "react";
import { Carousel } from "bootstrap";

import NavBarShop from "../components/NavBarShop";
import styles from "./Vendor.module.scss";
import VendorCard from "./components/VendorCardYellow";
import PageBtn from "../components/PageBtn";
import Footer from "../components/Footer";
import ChatBtn from "../components/ChatBtn";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Buffer } from "buffer";

function VendorCarousel() {
  
  useEffect(() => {
    const carouselElement = document.querySelector(
      "#carouselExampleIndicators"
    );
    const carousel = new Carousel(carouselElement, {
      interval: 3000, // 自動播放間隔
      wrap: true, // 是否循環播放
    });

    return () => {
      carousel.dispose(); // 组件卸載清理
    };
  }, []);
}

const Vendor = () => {
  const [vendor, setVendor] = useState({})
  const params = useParams();
  const [logoImgSrc, setLogoImgSrc] = useState('');
  // console.log(params) // can get vid
  const fetchVendorData = async () => {
    var url = "http://localhost:3200/shop/vendor/"+params.vid
    try {
      const response = await axios.get(url);
      setVendor(response.data[0]);
      // 檢查用：數據首次被獲取時顯示
      // console.log("Vendors Data:", response.data[0]);
      
      const base64String = `data:image/jpeg;base64,${Buffer.from(response.data[0].logo_img.data).toString('base64')}`;
      setLogoImgSrc(base64String);
    } catch (error) {
      console.error("Error fetching vendors data:", error);
    }
  };
  
  useEffect(() => {
    fetchVendorData();
    console.log(vendor)
  }, [params.vid]);
  
  useEffect(() => {
    console.log("Vendor data updated:", vendor);
  }, [vendor]);
  return (
    <>
      <NavBarShop />
      {/* vendorHeader */}
      <div
        className={`p-4 d-flex justify-content-center align-items-center d-grid gap-4 ${styles.header}`}
      >
        <div className="w-100 d-flex align-items-center d-grid gap-3">
          {/* 攤販圖Logo */}
          <div className=" w-25">
            <img
              className="rounded-circle w-100 object-fit-contain "
              // src="https://rhinoshield.tw/cdn/shop/collections/dttofriends-logo.jpg?v=1701837247"
              src={logoImgSrc}
            />
          </div>
          <div className=" w-75">
            {/*攤販資訊} */}
            <div className="d-flex align-items-center">
              <h3>{vendor.brand_name}</h3>
              <i className=" fs-5 bi bi-heart px-3 text-black-50"></i>
            </div>
            <p className={`${styles.headerText} overflow-hidden`}>
              {vendor.content}
            </p>
            {/* 攤販link */}
            <div className=" d-flex justify-content-end fs-3 d-grid gap-3 ">
              <a className="text-black-50" href={vendor.fb} target="_blank">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="text-black-50" href={vendor.ig} target="_blank">
                <i className="bi bi-instagram "></i>
              </a>
              <a className="text-black-50" href={vendor.web} target="_blank">
                <i className="bi bi-globe"></i>
              </a>
            </div>
          </div>
        </div>

        {/* carousel */}
        <div className={`w-100 overflow-hidden rounded-4 ${styles.carousel}`}>
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
            {/* 輪播圖片 */}
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
            {/*  */}
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
      {/* dropdown */}
      <div className="dropdown text-end my-3 mx-5 ">
        <button
          className="bg-white px-4 py-1 dropdown-toggle rounded-4"
          type="button"
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
      {/* VendorCards */}
      <div className="mb-5">
        <div className="container">
          <div className="row row-gap-4">
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
          </div>
        </div>
      </div>
      <PageBtn />
      <Footer />
      <ChatBtn />
    </>
  );
};

export default Vendor;
