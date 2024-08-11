import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import OrderItem from "./OrderItem";

function OrderCard() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="bg-white">
          <Row>
            <Col className="f-start">
              <h4 className="mb-0 d-inline-block me-3">店家ABC</h4>
              <Button
                className="rounded-pill px-3"
                variant="outline-secondary"
                size="sm"
              >
                查看賣場
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          {/* Order items */}
          <OrderItem />
          <OrderItem />
          <OrderItem />

          {/* Order total */}
          <Row className="mt-4">
            <Col className="text-end">
              <p className="c-gray">付款方式：信用卡</p>
              <p className="c-gray">訂單狀態：未出貨</p>
              <h5 className="text-red">訂單總額：NT$ 560</h5>
            </Col>
          </Row>

          {/* Delivery info */}
          <Row className="c-gray">
            <Col>
              <p>收件資訊</p>
              <p>收件人：王曉明</p>
              <p>電話：0911-222-333</p>
              <p>地址：台中市石岡區豐勢路896巷523弄162-7號25樓之3</p>
            </Col>
          </Row>
          <Col className="text-end">
            <Button className="rounded-pill px-3 border border-2 bg-white c-gray me-2 hover-bg-blueGray hover-c-white">
              取消訂單
            </Button>
            <Button className="rounded-pill px-3 border border-2 bg-white c-gray hover-bg-blueGray hover-c-white">
              聯絡攤主
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default OrderCard;
