import NavBarShop from "../../components/NavBarShop";
import Arrow from "../../components/Arrow";
import Footer from "../../components/Footer";
import ChatBtn from "../../components/ChatBtn";

import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Step3 = () => {
  const checkoutData = JSON.parse(localStorage.getItem('checkoutData'));
  const contactInfo = JSON.parse(localStorage.getItem('contactInfo'));
  const cartVisible = false;
  console.log(checkoutData);
  console.log(contactInfo);
  
  return (
    <>
      <NavBarShop cartVisible={cartVisible}/>
      <div className="f-space-around">
        <Arrow color="green" title="確認商品" />
        <Arrow color="green" title="寄送資訊" />
        <Arrow color="yellow" title="付款方式" />
        <Arrow color="white" title="完成訂單" />
      </div>
      <div className="container">
        <Form className="border p-5 my-5 "></Form>

        <Col className="f-end">
          <Button
            className="bg-white border border-red me-3"
            variant="border border-2 rounded-pill px-4"
            type="button"
          >
            回上一步
          </Button>
          <Button
            className="bg-red c-white"
            variant="border border-2 rounded-pill px-4"
            type="button"
          >
            下一步
          </Button>
        </Col>
      </div>
      <Footer />;
      <ChatBtn />
    </>
  );
};
export default Step3;
