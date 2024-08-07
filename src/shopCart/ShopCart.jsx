import { Button } from "react-bootstrap";
import MemberSideBar from "../components/MemberSideBar";
import NavBarShop from "../components/NavBarShop";
import SubTitleYellow from "../components/SubTitleYellow";
import ShopingCartForm from "./ShopingCartForm";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import axios from 'axios';


const ShopCart = () => {
  const [productsData, setProductsData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/index/carts/1");
        setProductsData(response.data);
        console.log("Products Data:", response.data);
      } catch (error) {
        console.error("Error fetching Products Data:", error);
      }
    };
    fetchProductsData();
  }, []);

  const handleTotalChange = (newTotal) => {
    setTotalPrice(newTotal);
  };


  return (
    <>
      <NavBarShop />
      <div class="row ">
        <div className="col-2  border-end border-3">
          <MemberSideBar />
        </div>
        <div className="col-10 ">
          <SubTitleYellow title="購物車" />
          <div className="container">
          {productsData && (
              <ShopingCartForm productsData={productsData} onTotalChange={handleTotalChange} />
            )}
            <div className="f-end-end mt-5 gap-3 ">
              <h4>總金額：NT${totalPrice}</h4>
              <Button variant="danger rounded-pill px-4 py-2">前往結帳</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ShopCart;
