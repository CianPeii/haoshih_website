import NavBarShop from "../../components/NavBarShop";
import Arrow from "../../components/Arrow";
import Footer from "../../components/Footer";
import ChatBtn from "../../components/ChatBtn";
import CheckOutCard from "../CheckOutCard";
import { Button } from "react-bootstrap";
import { turnPrice } from "../../utils/turnPrice";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Step1 = () => {
  const [productsData, setProductsData] = useState(null);
  const [useProducts, setUseProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get("data");

  let products = [];

  if (data) {
    try {
      products = JSON.parse(data);
      // console.log(products);
    } catch (error) {
      console.error("Error parsing data:", error);
    }
  }
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const fetchedData = [];
        for (let i = 0; i < products.length; i++) {
          const response = await axios.get(
            `http://localhost:5000/index/carts/products/${products[i].pid}/1`
          );
          fetchedData.push(response.data[0]); // 只取第一個元素
        }
        setProductsData(fetchedData);

        // 合併資料
        const useProducts = products.map((item, index) => ({
          pid: item.pid,
          amount: item.amount,
          ...fetchedData[index],
        }));

        setUseProducts(useProducts);

        // 計算總金額
        const total = useProducts.reduce(
          (sum, product) => sum + product.price * product.amount,
          0
        );
        setTotalAmount(total);
      } catch (error) {
        console.error("Error fetching Products Data:", error);
      }
    };
    fetchProductsData();
  }, [data]);

  const groupedProducts = useProducts.reduce((acc, product) => {
    const { vinfo } = product;
    if (!acc[vinfo]) {
      acc[vinfo] = [];
    }
    acc[vinfo].push(product);
    return acc;
  }, {});
  // console.log(groupedProducts);

  return (
    <>
      <NavBarShop />
      <div className="f-space-around">
        <Arrow color="yellow" title="確認商品" />
        <Arrow color="white" title="寄送資訊" />
        <Arrow color="white" title="付款方式" />
        <Arrow color="white" title="完成訂單" />
      </div>
      <div className="container">
        <CheckOutCard groupedProducts={groupedProducts} />
        <div className="f-end-end mt-5 gap-3 ">
          <h4>總金額：NT{turnPrice(totalAmount)}</h4>
          <Button className="bg-red c-white rounded-pill" variant=" px-4 py-2">
            前往結帳
          </Button>
        </div>
      </div>
      <Footer />
      <ChatBtn />
    </>
  );
};
export default Step1;
