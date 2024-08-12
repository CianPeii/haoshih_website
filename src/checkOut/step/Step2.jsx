import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NavBarShop from "../../components/NavBarShop";
import Arrow from "../../components/Arrow";
import Footer from "../../components/Footer";
import ChatBtn from "../../components/ChatBtn";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Step2 = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleNextStep = () => {
    const checkoutData = JSON.parse(localStorage.getItem('checkoutData'));
    // checkoutData 是前面的結帳商品的資訊
    const contactInfo = {
      fullName,
      phone,
      address,
    };

    // 將聯絡訊息和 checkoutData 一起儲存到 localStorage 中
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    navigate('/Step3');
  };
  
  return (
    <>
      <NavBarShop />
      <div className="f-space-around">
        <Arrow color="green" title="確認商品" />
        <Arrow color="yellow" title="寄送資訊" />
        <Arrow color="white" title="付款方式" />
        <Arrow color="white" title="完成訂單" />
      </div>
      <div className="container">
        <Form className="border p-5 my-5 ">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-end">
              收件人全名
            </Form.Label>
            <Col sm="8">
              <Form.Control 
                type="text" 
                placeholder="" 
                name="" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-end">
              收件人電話
            </Form.Label>
            <Col sm="8">
              <Form.Control 
              type="tel" 
              placeholder="" 
              name="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="container">
            <Form.Label column sm="2" className="text-end">
              收件人地址
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="textarea"
                placeholder="請填寫郵遞區號"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Form>

        <Col className="f-end">
          <Button
            className="bg-white border border-red me-3"
            variant="border border-2 rounded-pill px-4"
            type="button"
            onClick={() => navigate('/Step1')}
          >
            回上一步
          </Button>
          <Button
            className="bg-red c-white"
            variant="border border-2 rounded-pill px-4"
            type="button"
            onClick={handleNextStep}
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
export default Step2;
