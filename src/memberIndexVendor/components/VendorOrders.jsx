import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import SubTitleYellow from "../../components/SubTitleYellow";
import VendorOrderCard from "./VendorOrderCard";

const VendorOrders = (props) => {
  // 這裡拿到的是訂單陣列
  const { orderData } = props;

  return (
    <>
      <SubTitleYellow title="訂單管理" />
      <br />
      <Tabs
        defaultActiveKey="allStatus"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="allStatus" title="全部">
          <Container className="px-5">
            {orderData
              ? orderData.map((order) => (
                  <VendorOrderCard key={order.oid} orderData={order} />
                ))
              : "尚無訂單"}
          </Container>
        </Tab>
        <Tab eventKey="status0" title="待付款">
          目前沒有待付款訂單
        </Tab>
        <Tab eventKey="status1" title="待出貨">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="status2" title="已出貨">
          目前沒有已出貨訂單
        </Tab>
        <Tab eventKey="status3" title="待收貨">
          目前沒有待出貨訂單
        </Tab>
        <Tab eventKey="status4" title="已完成">
          Tab content for Loooonger Tab
        </Tab>
      </Tabs>

      {/* <Nav justify variant="tabs" defaultActiveKey="allStatus">
        <Nav.Item>
          <Nav.Link
            className="text-decoration-none c-black"
            eventKey="allStatus"
            data-bs-target="allStatusText"
          >
            全部
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-decoration-none c-black"
            eventKey="status0"
            data-bs-target="status0Text"
          >
            待付款
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-decoration-none c-black" eventKey="status1">
            待出貨
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-decoration-none c-black" eventKey="status2">
            已出貨
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-decoration-none c-black" eventKey="status3">
            待收貨
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-decoration-none c-black" eventKey="status4">
            已完成
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="allStatusText"
          role="tabpanel"
          tabindex="0"
        >
          ...1
        </div>
        <div
          className="tab-pane fade"
          id="status0Text"
          role="tabpanel"
          tabindex="0"
        >
          ...2
        </div>
        <div
          className="tab-pane fade"
          id="status1Text"
          role="tabpanel"
          tabindex="0"
        >
          ...3
        </div>
        <div
          className="tab-pane fade"
          id="status2Text"
          role="tabpanel"
          tabindex="0"
        >
          ...4
        </div>
        <div
          className="tab-pane fade"
          id="status3Text"
          role="tabpanel"
          tabindex="0"
        >
          ...5
        </div>
        <div
          className="tab-pane fade"
          id="status4Text"
          role="tabpanel"
          tabindex="0"
        >
          ...6
        </div>
      </div> */}
    </>
  );
};

export default VendorOrders;
