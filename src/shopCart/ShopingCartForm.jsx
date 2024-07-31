import React from "react";
import { Container, Table, Form, Card } from "react-bootstrap";
import ShopList from "./ShopList";

const ShopingCartForm = () => {
  return (
    <Container>
      <Card className="my-5">
        <Card.Body>
          <Form.Check type="checkbox" label="店家1" className="mb-3 fw-bold" />
          <Table borderless>
            <thead>
              <tr className="border-bottom">
                <th className="text-center"></th>
                <th className="text-center">商品</th>
                <th className="text-center">單價</th>
                <th className="text-center">數量</th>
                <th className="text-center">小計</th>
              </tr>
            </thead>
            <tbody>
              <ShopList />
              <ShopList />
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ShopingCartForm;
