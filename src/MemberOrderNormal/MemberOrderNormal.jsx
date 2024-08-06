import NavBarShop from "../components/NavBarShop";
import MemberSideBar from "../components/MemberSideBar";
import SubTitleYellow from "../components/SubTitleYellow";
import ChatBtn from "../components/ChatBtn";
import Footer from "../components/Footer";
import OrderCard from "./components/OrderCard";
import { Form, Row, Col, Container } from "react-bootstrap";

const MemberOrderNormal = () => {
  return (
    <>
      <NavBarShop />
      <div class="row mw-100 ">
        <div className="col-3  border-end border-3">
          <MemberSideBar />
        </div>
        <div className="col-9 ">
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
            <OrderCard />
          </Container>
        </div>
      </div>
      <ChatBtn />
      <Footer />
    </>
  );
};
export default MemberOrderNormal;
