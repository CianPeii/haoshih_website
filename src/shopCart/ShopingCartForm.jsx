import React from "react";
import { Container, Table, Form, Card } from "react-bootstrap";
import ShopList from "./ShopList";

const ShopingCartForm = () => {
  return (
    <Container>
      <Card className="my-5">
        <Card.Body>
          <Form.Check type="checkbox" label="店家1" className="mb-3" />
          <Table borderless>
            <thead className="border-bottom">
              <tr>
                <th></th>
                <th>商品</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              {/* <ShopList /> */}
              <ShopList />
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ShopingCartForm;
