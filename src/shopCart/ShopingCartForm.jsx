import React, { useState, useEffect } from "react";
import { Container, Table, Form, Card } from "react-bootstrap";
import ShopList from "./ShopList";

const ShopingCartForm = ({ productsData, onTotalChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedProducts, setCheckedProducts] = useState(new Set());

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    // 更新 ShopList 的选中状态
    setCheckedProducts(new Set(productsData.map(product => product.pid)));
    onTotalChange(calculateTotal(checkedProducts));
  };

  const handleProductCheckChange = (pid, checked) => {
    const updatedCheckedProducts = new Set(checkedProducts);
    if (checked) {
      updatedCheckedProducts.add(pid);
    } else {
      updatedCheckedProducts.delete(pid);
    }
    setCheckedProducts(updatedCheckedProducts);

    // 判断是否取消 ShopingCartForm 的全选框
    setIsChecked(updatedCheckedProducts.size === productsData.length);
    onTotalChange(calculateTotal(updatedCheckedProducts));
  };

  const calculateTotal = (checkedProducts) => {
    return productsData
      .filter(product => checkedProducts.has(product.pid))
      .reduce((total, product) => total + (product.amount * product.price), 0);
  };

  return (
    <Container>
      <Card className="my-5">
        <Card.Body>
          <Form.Check
            type="checkbox"
            label="店家1"
            className="mb-3 fw-bold"
            checked={isChecked}
            onChange={handleSelectAllChange}
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
                onTotalChange={handleProductCheckChange}
                checkedProducts={checkedProducts}
              />
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ShopingCartForm;
