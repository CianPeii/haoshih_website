import NavBarShop from "../../components/NavBarShop";
import Arrow from "../../components/Arrow";
import Footer from "../../components/Footer";
import ChatBtn from "../../components/ChatBtn";

import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Step2 = () => {
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
              <Form.Control type="text" placeholder="" name="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-end">
              收件人電話
            </Form.Label>
            <Col sm="8">
              <Form.Control type="tel" placeholder="" name="phone" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-end">
              收件人地址
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="textarea"
                placeholder="免郵遞區號"
                name="address"
              />
            </Col>
          </Form.Group>
        </Form>

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
export default Step2;
