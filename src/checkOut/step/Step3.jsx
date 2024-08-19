  import React, { useState, useEffect } from "react";
  import { Button, Col, Form, Row, Container, Card } from "react-bootstrap";
  import NavBarShop from "../../components/NavBarShop";
  import Arrow from "../../components/Arrow";
  import Footer from "../../components/Footer";
  import ChatBtn from "../../components/ChatBtn";
  import { turnPrice } from "../../utils/turnPrice";
  import queryString from "query-string";
  import axios from "axios";

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

  const Step3 = () => {
    const cartData = JSON.parse(localStorage.getItem("Step1Data"));
    const addressData = JSON.parse(localStorage.getItem("Step2Data"));
    const vendorProducts = JSON.parse(localStorage.getItem("vendorProducts"));
    const user = JSON.parse(localStorage.getItem("user"));
    const total = JSON.parse(localStorage.getItem("total"));

    const cartVisible = false;

    const products = [];

    cartData.map(({ pid,name, amount, price }) =>
      products.push({ pid,name, amount, price })
    );


    const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].id); // 默認值設置為 "cod"
    const [couponCode, setCouponCode] = useState("");
    const [detail, setDetail] = useState(null); // Added this line to fix the issue
    
    // const newVendorProducts = for(i=1 ; i < product; i++) {
    //   vendorProducts.map(() => ({ pid, amount, price }));
    // }

    console.log(vendorProducts,"newVendorProduct");
    
    useEffect(() => {
      let paymentId;
      switch (selectedPayment) {
        case "linepay":
          paymentId = 0;
          break;
        case "transfer":
          paymentId = 1;
          break;
        default:
          paymentId = 2;
          break;
      }

      const newDetail = {
        item:vendorProducts[1],
        ...total,
        payment: paymentId,
      };

      setDetail(newDetail); // Update the state
      localStorage.setItem("detail", JSON.stringify(newDetail));
      localStorage.setItem("send_data", JSON.stringify(send_data));
    }, []); // 添加依賴項，確保所有依賴都能觸發更新


    const send_data = {
      fullName: addressData.fullName,
      phone: addressData.phone,
      address:{
        postNum: addressData.postNum,
        city: addressData.city,
        district: addressData.district,
        address: addressData.address
      }
    };



    const handleNextStep = async () => {
      if (selectedPayment === paymentMethods[1].id) {
        const res = await axios.post("http://localhost:3200/linePay", {
          products,
          ...total,
        });

        window.open(res.data, "_blank");

        // 新增 增加資料庫欄位  By Leo
        try {
          if (!detail) {
            console.error("Detail is not available");
            return;
          }
          const response = await axios.post(
            "http://localhost:3200/carts/postData",
            {
              uid: user.uid,
              vid: vendorProducts[1][0].vinfo,
              detail: detail, // Use the state here
              send_data: send_data,
              status: 1,
              pay: 1,
            }
          );
          alert("訂單已送出");
          // console.log(response);
        } catch (error) {
          console.error("Error fetching Products Data:", error);
        }
      } else {
        // ...
      }
    };
    console.log("TestNow", detail);







    const handlePaymentChange = (id) => {
      setSelectedPayment(id);
    };

    const handleCouponChange = (e) => {
      setCouponCode(e.target.value);
    };
    // console.log(vendorProducts[1]);
    
    console.log("123",detail);
    

    // const handleNext = async () => {
    //   try {
    //     if (!detail) {
    //       console.error("Detail is not available");
    //       return;
    //     }
    //     const response = await axios.post("http://localhost:3200/carts/postData", {
    //       uid: user.uid,
    //       vid: vendorProducts[1][1].vinfo,
    //       detail: detail,  // Use the state here
    //       send_data: send_data,
    //       status: 1,
    //       pay: 1,
    //     }
    //     );
    //     alert("訂單已送出");
    //     // console.log(response);
    //   } catch (error) {
    //     console.error("Error fetching Products Data:", error);
    //   }
    // };

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
                  <h5 className="mb-4">訂單摘要</h5>
                  <p>商品總額: {turnPrice(total.total)}</p>
                  <p>運費: $60</p>
                  <h5>總計: {turnPrice(total.total + 60)}</h5>
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
              onClick={handleNextStep}
            >
              下一步
            </Button>
          </Col>
        </Container>
        <Footer />
        <ChatBtn />
      </>
    );
  };

  export default Step3;
