import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import styles from "./VendorDetail.module.scss";
import { Carousel } from "bootstrap";
const VendorDetail = () => {
    const [data, setData] = useState();
    //useEffect用於畫面上有變化時動態更新資料
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/getdata');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        getData();
    }, []);
    //照片來源清單
    //輪播容器
    useEffect(() => {
        if(!data) return;

        const indicatorsContainer = document.getElementById('carousel-indicators');
        if(!indicatorsContainer) return;

        indicatorsContainer.innerHTML = '';

        const imageList = [
            data.data_from_server[0].brand_img01,
            data.data_from_server[0].brand_img02,
            data.data_from_server[0].brand_img03,
            data.data_from_server[0].brand_img04,
            data.data_from_server[0].brand_img05
        ];

        imageList.forEach((item, index) => {
            if(item !== null) {
                const cbutton = document.createElement('button');
                    cbutton.type = 'button';
                    cbutton.dataset.bsTarget = '#carouselExampleIndicators';
                    cbutton.dataset.bsSlideTo = index;
                    cbutton.ariaLabel = `Slide ${index + 1}`;
                    if (index === 0) {
                        cbutton.classList.add('active');
                        cbutton.ariaCurrent = 'true';
                    }
                indicatorsContainer.appendChild(cbutton);
            }
        })
    },[data]);

    if (!data) {
        return <p>Loading</p>
    }
    
    

    const imageSrc = [
        data.data_from_server[0].brand_img01,
        data.data_from_server[0].brand_img02,
        data.data_from_server[0].brand_img03,
        data.data_from_server[0].brand_img04,
        data.data_from_server[0].brand_img05
    ]
    //產品視覺照1~5轉base64
    //參考vendor的輪播圖，注意!如果資料庫欄位是空的會錯誤，因此加入判斷式
    const image01ToBase64 = `data:image/jpeg;base64,${(data.data_from_server[0].brand_img01 !== null) ? Buffer.from(data.data_from_server[0].brand_img01).toString('base64') : ""}`;
    const image02ToBase64 = `data:image/jpeg;base64,${(data.data_from_server[0].brand_img02 !== null) ? Buffer.from(data.data_from_server[0].brand_img02).toString('base64') : ""}`;
    const image03ToBase64 = `data:image/jpeg;base64,${(data.data_from_server[0].brand_img03 !== null) ? Buffer.from(data.data_from_server[0].brand_img03).toString('base64') : ""}`;
    const image04ToBase64 = `data:image/jpeg;base64,${(data.data_from_server[0].brand_img04 !== null) ? Buffer.from(data.data_from_server[0].brand_img04).toString('base64') : ""}`;
    const image05ToBase64 = `data:image/jpeg;base64,${(data.data_from_server[0].brand_img05 !== null) ? Buffer.from(data.data_from_server[0].brand_img05).toString('base64') : ""}`;
    //攤位名稱
    const brandName = data.data_from_server[0].brand_name;
    //攤位簡介
    const vendorContent = data.data_from_server[0].content;
    return (
        <div id="shop">
            {console.log(data.data_from_server[0].brand_img05)
            }
            <div id="shop_nav">
                <div id="brand_logo">
                </div>
                <h3 id="brand_name">{brandName}</h3>
            </div>
            {/* //輪播圖 */}
            <div className={`w-100 overflow-hidden rounded-4 ${styles.carousel}`}>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide w-100"
                    data-bs-ride="carousel"
                    data-bs-interval="3000" //控制播放
                >
                    <div className="carousel-indicators"
                    id="carousel-indicators">

                    </div>
                    {/* 輪播圖片 */}
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img
                                src={image01ToBase64}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={image02ToBase64}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={image03ToBase64}
                                className="d-block w-100 "
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={image04ToBase64}
                                className="d-block w-100 "
                                alt="..."
                            />
                        </div>
                        {/* <div className="carousel-item">
                            <img
                                src={image05ToBase64}
                                className="d-block w-100 "
                                alt="..."
                            />
                        </div> */}
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
            <div id="shop_detail">
                <p>{vendorContent}</p>
            </div>
            <div id="shop_btn">
                {/* <i className="fa fa-instagram" style="font-size:30px"></i>
        <i className="fa fa-facebook-square" style="font-size:30px"></i>
        <i className="fa fa-twitter" style="font-size:30px"></i> */}
            </div>
        </div>
    );
    
};
export default VendorDetail;
