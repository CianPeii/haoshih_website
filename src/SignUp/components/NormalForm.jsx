import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const NormalForm = () => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" className="text-end">
          會員姓名
        </Form.Label>
        <Col sm="3">
          <Form.Control type="text" placeholder="姓氏" name="first_name" />
        </Col>
        <Col sm="5">
          <Form.Control type="text" placeholder="名字" name="last_name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" className="text-end">
          會員暱稱
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="8個字以內" name="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" className="text-end">
          身分字號
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="開頭字母大寫" name="id" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" className="text-end">
          會員帳號
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="8~12個英數字組合" name="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" className="text-end">
          手機號碼
        </Form.Label>
        <Col sm="8">
          <Form.Control type="tel" placeholder="手機號碼" name="phone" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" className="text-end">
          電子信箱
        </Form.Label>
        <Col sm="8">
          <Form.Control type="email" placeholder="電子信箱" name="email" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5">
        <Form.Label column sm="2" className="text-end">
          通訊地址
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="textarea"
            placeholder="免郵遞區號"
            name="address"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" className="text-end">
          設定密碼
        </Form.Label>
        <Col sm="8">
          <Form.Control type="password" name="password" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5">
        <Form.Label column sm="2" className="text-end">
          確認密碼
        </Form.Label>
        <Col sm="8">
          <Form.Control type="password" name="doubleCheck" />
        </Col>
      </Form.Group>
      <Row sm="8" className="justify-content-center">
        <Col className="d-flex justify-content-center">
          <Button
            className="bg-blueGray c-white me-3"
            variant="border border-2 rounded-pill px-4"
            type="button"
          >
            確認
          </Button>
          <Button
            className="bg-gray c-white"
            variant="border border-2 rounded-pill px-4"
            type="button"
          >
            取消
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default NormalForm;
