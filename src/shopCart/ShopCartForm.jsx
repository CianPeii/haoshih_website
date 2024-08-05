import React, { useState, useEffect } from "react";
import { Container, Table, Form, Card } from "react-bootstrap";
import ShopList from "./ShopList";

const ShopCartForm = ({ productsData, selectedProducts, onProductCheckChange, onProductAmountChange, onProductDelete }) => {
  const [allChecked, setAllChecked] = useState(false);

  const handleAllCheckChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    productsData.forEach(product => {
      onProductCheckChange(product.pid, newAllChecked);
    });
  };

  useEffect(() => {
    setAllChecked(selectedProducts.size === productsData.length);
  }, [selectedProducts, productsData]);

  return (
    <Container>
      <Card className="my-5">
        <Card.Body>
          <Form.Check
            type="checkbox"
            label="店家1"
            className="mb-3 fw-bold"
            checked={allChecked}
            onChange={handleAllCheckChange}
          />
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
              <ShopList
                productsData={productsData}
                selectedProducts={selectedProducts}
                onProductCheckChange={onProductCheckChange}
                onProductAmountChange={onProductAmountChange}
                onProductDelete={onProductDelete}
              />
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ShopCartForm;