import NavBarShop from "../../components/NavBarShop";
import Arrow from "../../components/Arrow";
import Footer from "../../components/Footer";
import ChatBtn from "../../components/ChatBtn";
import CheckOutCard from "../CheckOutCard";
import { Button } from "react-bootstrap";
const Step1 = () => {
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
        <CheckOutCard />
        <CheckOutCard />
        <div className="f-end-end mt-5 gap-3 ">
          <h4>總金額：NT$999</h4>
          <Button variant="red rounded-pill px-4 py-2">前往結帳</Button>
        </div>
      </div>
      <Footer />
      <ChatBtn />
    </>
  );
};
export default Step1;
