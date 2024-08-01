import { Button } from "react-bootstrap";

import MemberSideBar from "../components/MemberSideBar";
import NavBarShop from "../components/NavBarShop";
import SubTitleYellow from "../components/SubTitleYellow";
import ShopingCartForm from "./ShopingCartForm";
import Footer from "../components/Footer";

const ShopCart = () => {
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
            <ShopingCartForm />
            <ShopingCartForm />
            <div className="f-end-end mt-5 gap-3 ">
              <h4>總金額：NT$999</h4>
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
