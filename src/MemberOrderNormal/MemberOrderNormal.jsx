import SubTitleYellow from "../components/SubTitleYellow";
import OrderCard from "./components/OrderCard";
import { Form, Row, Col, Container } from "react-bootstrap";

const MemberOrderNormal = (props) => {
  const { orderData } = props;
  return (
    <>
      <SubTitleYellow title="我的訂單" />
      <Container className="p-5">
        <Row className="f-end">
          <Col xs="auto">
            <Form.Select
              aria-label="Default select example"
              className="select-auto-width"
            >
              <option>訂購日期</option>
              <option value="1">新 → 舊</option>
              <option value="2">舊 → 新</option>
            </Form.Select>
          </Col>
        </Row>
        {/* 有好幾筆訂單，所以要用map */}
        {orderData.map((order) => (
          <OrderCard key={order.oid} orderData={order} />
        ))}
      </Container>
    </>
  );
};
export default MemberOrderNormal;
