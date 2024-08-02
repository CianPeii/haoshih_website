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
    
    //參考vendor的輪播圖，注意!如果資料庫欄位是空的會錯誤，因此加入判斷式
    //產品視覺照1~5
    
    
    const image01ToBase64 = `data:image/jpeg;base64,${(data.data_from_server[0].brand_img01 !== null)? Buffer.from(data.data_from_server[0].brand_img01).toString('base64') : ""}`;
    const image02ToBase64 = `data:image/jpeg;base64,${(data.data_from_server[0].brand_img02 !== null)? Buffer.from(data.data_from_server[0].brand_img02).toString('base64') : ""}`;
    const image03ToBase64 = `data:image/jpeg;base64,${(data.data_from_server[0].brand_img03 !== null)? Buffer.from(data.data_from_server[0].brand_img03).toString('base64') : ""}`;
    const image04ToBase64 = `data:image/jpeg;base64,${(data.data_from_server[0].brand_img04 !== null)? Buffer.from(data.data_from_server[0].brand_img04).toString('base64') : ""}`;
    const image05ToBase64 = `data:image/jpeg;base64,${(data.data_from_server[0].brand_img05 !== null)? Buffer.from(data.data_from_server[0].brand_img05).toString('base64') : ""}`;
    //攤位名稱
    const brandName = data.data_from_server[0].brand_name;
    //攤位簡介
    const vendorContent = data.data_from_server[0].content;
    return (
    <div id="shop">
        <div id="shop_nav">
        <div id="brand_logo">
            
        </div>
        <h3 id="brand_name">{ brandName }</h3>
        </div>
        <div id="shop_banner">
        <div id="img_container">
            <img src={ image01ToBase64 }/> 
            <img src={ image02ToBase64 }/>
            <img src={ image03ToBase64 }/>
            <img src={ image04ToBase64 }/>
            <img src={ image05ToBase64 }/>
        </div>
        </div>
        <div id="shop_detail">
        <p>{ vendorContent }</p>
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
