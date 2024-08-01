import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function MemberForm(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // TO-DO: 把應該要改成 * 的部分用 string method 轉換成 *
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className=" my-5 ">
        <Col sm="2" className="text-end">
          <p className="c-gray">一般會員</p>
        </Col>
        <Col sm="6">
          <div className="f-start">
            <h2 className="me-2">{props.profile.first_name}</h2>
            <h2 className="me-3">{props.profile.last_name}</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="2" className="text-end">
          <p>身份字號</p>
        </Col>
        <Col sm="6">{props.profile.tw_id}</Col>
      </Row>
      <Row>
        <Col sm="2" className="text-end">
          <p>會員帳號</p>
        </Col>
        <Col sm="6">{props.profile.account}</Col>
      </Row>
      <Form.Group as={Row} controlId="validationCustom00" className="mb-3">
        <Form.Label column sm="2" className="text-end">
          會員姓名
        </Form.Label>
        <Col sm="2">
          <Form.Control
            type="text"
            placeholder={props.profile.first_name}
            required
          />
        </Col>
        <Col sm="4">
          <Form.Control
            type="text"
            placeholder={props.profile.last_name}
            required
          />
          <Form.Control.Feedback type="invalid">
            請輸入正確姓名
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="validationCustom01" className="mb-3">
        <Form.Label column sm="2" className="text-end">
          會員暱稱
        </Form.Label>
        <Col sm="6">
          <Form.Control
            type="text"
            placeholder={props.profile.nickname}
            required
          />
          <Form.Control.Feedback type="invalid">
            請輸入正確暱稱
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="validationCustom02" className="mb-3">
        <Form.Label column sm="2" className="text-end">
          手機號碼
        </Form.Label>
        <Col sm="6">
          <Form.Control type="tel" placeholder={props.profile.phone} required />
          <Form.Control.Feedback type="invalid">
            請輸入正確手機號碼
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="validationCustom03" className="mb-3">
        <Form.Label column sm="2" className="text-end">
          電子信箱
        </Form.Label>
        <Col sm="6">
          <Form.Control
            type="email"
            placeholder={props.profile.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            請輸入正確電子信箱
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="validationCustom04" className="mb-5">
        <Form.Label column sm="2" className="text-end">
          通訊地址
        </Form.Label>
        <Col sm="6">
          <Form.Control
            type="address"
            placeholder={props.profile.address}
            required
          />
          <Form.Control.Feedback type="invalid">
            請輸入正確地址
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="validationCustom05" className="mb-3">
        <Form.Label column sm="2" className="text-end">
          修改密碼
        </Form.Label>
        <Col sm="6">
          <Form.Control type="password" placeholder="" required />
          <Form.Control.Feedback type="invalid">
            請輸入密碼
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="validationCustom06" className="mb-5">
        <Form.Label column sm="2" className="text-end">
          確認密碼
        </Form.Label>
        <Col sm="6">
          <Form.Control type="password" placeholder="" required />
          <Form.Control.Feedback type="invalid">
            請輸入密碼
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Row>
        <Col sm="8">
          <div className="d-flex justify-content-center">
            <Button
              className="me-5"
              variant="bg-white border border-2 c-gray rounded-pill px-4 py-2"
              type="submit"
            >
              取消變更
            </Button>
            <Button
              className="ms-5"
              variant=" bg-blueGray text-white rounded-pill px-4 py-2"
              type="submit"
            >
              儲存變更
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default MemberForm;
