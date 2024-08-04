import NavBarShop from "../../components/NavBarShop";
import Arrows from "../../components/Arrows";
import Footer from "../../components/Footer";
import ChatBtn from "../../components/ChatBtn";
import CheckOutCard from "../CheckOutCard";
import { Button } from "react-bootstrap";
const Step1 = () => {
  return (
    <>
      <NavBarShop />
      <div className="container">
        <Arrows />
        <CheckOutCard />
        <CheckOutCard />
        <div className="f-end-end mt-5 gap-3 ">
          <h4>總金額：NT$999</h4>
          <Button variant="danger rounded-pill px-4 py-2">前往結帳</Button>
        </div>
      </div>
      <Footer />
      <ChatBtn />
    </>
  );
};
export default Step1;
