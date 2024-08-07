import NavBarShop from "../../components/NavBarShop";
import Arrow from "../../components/Arrow";
import Footer from "../../components/Footer";
import ChatBtn from "../../components/ChatBtn";
import CheckOutCard from "../CheckOutCard";
import { Button } from "react-bootstrap";
import {turnPrice} from "../../utils/turnPrice";
import { useLocation } from 'react-router-dom';

const Step1 = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get('data');

  let products = [];

  if (data) {
    try {
      products = JSON.parse(data);
      console.log(products);
      
    } catch (error) {
      console.error('Error parsing data:', error);
    }
  }
  return (
    <>
        <div>
      <h1>结账页面</h1>
      {products.length > 0 ? (
        products.map(({ pid, amount }) => (
          <div key={pid}>
            商品 ID: {pid}, 数量: {amount}
          </div>
        ))
      ) : (
        <p>没有选中的商品。</p>
      )}
    </div>

    
      <NavBarShop />
      <div className="f-space-around">
        <Arrow color="yellow" title="確認商品" />
        <Arrow color="white" title="寄送資訊" />
        <Arrow color="white" title="付款方式" />
        <Arrow color="white" title="完成訂單" />
      </div>

      <div className="container">
        <CheckOutCard products={products}/>
        <div className="f-end-end mt-5 gap-3 ">
          <h4>總金額：NT${turnPrice(99999)}</h4>
          <Button variant="red rounded-pill px-4 py-2">前往結帳</Button>
        </div>
      </div>
      <Footer />
      <ChatBtn />
    </>
  );
};
export default Step1;
