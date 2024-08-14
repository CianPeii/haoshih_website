import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarShop from "../../components/NavBarShop";
import Arrow from "../../components/Arrow";
import Footer from "../../components/Footer";
import ChatBtn from "../../components/ChatBtn";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import  FormSelect  from "react-bootstrap/FormSelect";

const cities = ["台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市"]; // 示例城市

const Step2 = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [postNum, setPostNum] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const cartVisible = false;

  const handleNextStep = () => {
    const Step1Data = JSON.parse(localStorage.getItem("Step1Data"));
    const total = JSON.parse(localStorage.getItem("total"));

    const contactInfo = {
      fullName,
      phone,
      postNum,
      city,
      district,
      address,
    };
    console.log(total);


    localStorage.setItem("Step1Data", JSON.stringify(Step1Data));
    localStorage.setItem("Step2Data", JSON.stringify(contactInfo));
    navigate("/Step3");
  };

  return (
    <>
      <NavBarShop cartVisible={cartVisible} />
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-end">
              收件地址
            </Form.Label>
            <Col sm="2">
              <Form.Control
                type="text"
                placeholder="請輸入郵遞區號"
                value={postNum}
                onChange={(e) => setPostNum(e.target.value)}
              />
            </Col>
            {/* <Form.Label column sm="1" className="text-center">
              縣市
            </Form.Label> */}
            <Col sm="3">
              <Form.Select
                as="select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                // className="text-center"
              >
                <option value="">請選擇縣市</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Select>
            </Col>
            {/* <Form.Label column sm="2" className="text-end">
              地區
            </Form.Label> */}
            <Col sm="3">
              <Form.Control
                type="text"
                placeholder="請輸入鄉鎮市區"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-end">
              詳細地址
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="詳細地址"
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
            onClick={() => navigate(-1)}
          >
            回上一步
          </Button>
          <Button
            className="rounded-pill px-4 py-2 bg-secondary c-black border border-2"
            type="button"
            onClick={handleNextStep}
          >
            下一步
          </Button>
        </Col>
      </div>
      <Footer />
      <ChatBtn />
    </>
  );
};

export default Step2;
