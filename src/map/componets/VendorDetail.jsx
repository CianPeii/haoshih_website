import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

//渲染前先調用getData取得初始資料
// const getData = async() => {
//     try {
//         const response = await axios.get('http://localhost:8000/getdata');
//         return response.data
//     }catch (error) {
//         console.error('Error fetching data', error);
//     }  
// };
// let dataInit = await getData();

const VendorDetail = () => {
    const [data, setData] = useState();
    //useEffect用於畫面上有變化時動態更新資料
    useEffect(() => {
        const getData = async() => {
            try {
                const response = await axios.get('http://localhost:8000/getdata');
                setData(response.data);
            }catch (error) {
                console.error('Error fetching data', error);
            }  
        };
        getData();
    }, []);
    if(!data) {
        return <p>Loading</p>
    }
    
    //參考vendor的輪播圖
    const image01ToBase64 = `data:image/jpeg;base64,${Buffer.from(data.data_from_server[0].brand_img01).toString('base64')}`;
    
    return (
    <div id="shop">
        <div id="shop_nav">
        <div id="brand_logo">
            <img src={ image01ToBase64 }/> 
        </div>
        <h3 id="brand_name"></h3>
        </div>
        <div id="shop_banner">
        <div id="img_container">
            {/* <img
            src=""
            alt=""
            /> */}
        </div>
        </div>
        <div id="shop_detail">
        <p></p>
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
