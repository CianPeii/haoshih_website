import React, { useState } from "react";
import { Button, Col, Form, Row, Container, Card } from "react-bootstrap";
import NavBarShop from "../../components/NavBarShop";
import Arrow from "../../components/Arrow";
import Footer from "../../components/Footer";
import ChatBtn from "../../components/ChatBtn";

const Step3 = () => {
  const Step1Data = JSON.parse(localStorage.getItem("Step1Data"));
  const Step2Data = JSON.parse(localStorage.getItem("Step2Data"));
  const total = JSON.parse(localStorage.getItem("total"));
  const cartVisible = false;
  // console.log(Step1Data,Step2Data,total);
  const item = Step1Data.map(({ pid, amount, price }) => ({
    pid,
    amount,
    price
  }));
  

  // console.log("detail",detail);
  
  const send_data = {
    ...Step2Data
  };
  // console.log("send_data",send_data);
  

  const [selectedPayment, setSelectedPayment] = useState("linepay"); // 將默認值設置為 "linepay"
  const [couponCode, setCouponCode] = useState("");

  const paymentMethods = [
    {
      id: "cod",
      label: "貨到付款",
      details: "收到商品時以現金付款",
      estimatedDelivery: "3-5 個工作天",
    },
    {
      id: "linepay",
      label: "LinePay",
      details: "使用 LINE 應用程式進行安全支付",
      estimatedDelivery: "2-4 個工作天",
    },
    {
      id: "transfer",
      label: "銀行轉帳",
      details: "使用網路銀行或 ATM 轉帳",
      estimatedDelivery: "1-3 個工作天（待款項確認）",
    },
  ];

  const handlePaymentChange = (id) => {
    setSelectedPayment(id);
    if(id==="linepay"){
      id=0;
    }else if(id==="transfer"){
      id=1;
    }else{
      id=2;
    };
    var detail = {
      item:item,
      payment:id,
      ...total
    };
    console.log("detail", detail);
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  return (
    <>
      <NavBarShop cartVisible={cartVisible} />
      <div className="f-space-around">
        <Arrow color="green" title="確認商品" />
        <Arrow color="green" title="寄送資訊" />
        <Arrow color="yellow" title="付款方式" />
        <Arrow color="white" title="完成訂單" />
      </div>
      <Container>
        <Row className="my-4">
          <Col md={8}>
            <Form className="border p-4">
              <h4 className="mb-4">付款方式</h4>
              {paymentMethods.map((method) => (
                <Card key={method.id} className="mb-3">
                  <Card.Body>
                    <Form.Check
                      type="radio"
                      id={method.id}
                      label={method.label}
                      checked={selectedPayment === method.id}
                      onChange={() => handlePaymentChange(method.id)}
                    />
                    <small className="text-muted d-block mt-2">
                      {method.details}
                    </small>
                    <small className="text-info d-block mt-1">
                      預計送達時間: {method.estimatedDelivery}
                    </small>
                  </Card.Body>
                </Card>
              ))}
              <Form.Group className="mb-3">
                <Form.Label>優惠券代碼</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="輸入優惠券代碼"
                  value={couponCode}
                  onChange={handleCouponChange}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h5>訂單摘要</h5>
                <p>商品總額: $1000</p>
                <p>運費: $60</p>
                <p>優惠折扣: -$0</p>
                <hr />
                <h5>總計: $1060</h5>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <h6>
                  安全支付保證 <i className="bi bi-shield-fill-check c-red"></i>
                </h6>
                <p className="small">
                  我們使用先進的加密技術確保您的支付安全。您的個人資料及付款信息將受到嚴格保護。
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Col className="f-end">
          <Button
            className="bg-white border border-red me-3"
            variant="border border-2 rounded-pill px-4"
            type="button"
          >
            <a href="/step2" className="c-black text-decoration-none">
              回上一步
            </a>
          </Button>
          <Button
            className="rounded-pill px-4 py-2 bg-secondary c-black border border-2"
            type="button"
          >
            <a href="/step4" className="c-black text-decoration-none">
              下一步
            </a>
          </Button>
        </Col>
      </Container>
      <Footer />
      <ChatBtn />
    </>
  );
};

export default Step3;
