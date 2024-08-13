import React, { useEffect, useState } from "react";
import { Modal, Button, Image, InputGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { X, Dash, Plus, Cart } from "react-bootstrap-icons";
import { Buffer } from "buffer"
const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 15px;
    border: 1px solid rgba(158, 158, 158, 0.5);
    background: #fff;
    width: 950px;
    margin: auto;
  }

  .modal-body {
    display: flex;
    padding: 20px 50px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #000;
  font-size: 1.5rem;
  &:hover {
    color: #666;
    background: none;
  }
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  color: #ff6b6b;
  font-weight: bold;
`;

const QuantitySelector = styled(InputGroup)`
  width: 150px;
`;

const AddToCartButton = styled(Button)`
  background-color: #e7f1ff;
  color: #000;
  border: none;
  &:hover {
    background-color: #d0e3ff;
  }
`;

const ProductDescription = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 15px;
  margin-top: 15px;
`;

const ProductModal = ({ show, onHide, product }) => {
  const [quantity, setQuantity] = useState(1);
  // const [imgSrc, setImgSrc] = useState("")

  const handleQuantityChange = (amount) => {
    setQuantity(Math.max(1, quantity + amount));
  };
  // useEffect(() => {
  //   const imageData = product.img01;
  //   console.log(imageData)
  //   const base64String = Buffer.from(imageData).toString('base64');
  //   setImgSrc(`data:image/jpeg;base64,${base64String}`)
  // }, [])

  return (
    <StyledModal show={show} onHide={onHide} size="lg" centered>
      <Modal.Body>
        <CloseButton onClick={onHide}>
          <X />
        </CloseButton>
        {/* <Image src={imgSrc} fluid rounded /> */}
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>NT$ {product.price}</ProductPrice>
        <QuantitySelector>
          <Button
            variant="outline-secondary"
            onClick={() => handleQuantityChange(-1)}
          >
            <Dash />
          </Button>
          <FormControl value={quantity} readOnly />
          <Button
            variant="outline-secondary"
            onClick={() => handleQuantityChange(1)}
          >
            <Plus />
          </Button>
        </QuantitySelector>
        <p>庫存: {product.quantity}</p>
        <AddToCartButton>
          <Cart /> 加入購物車
        </AddToCartButton>
        <ProductDescription>
          <p>{product.content}</p>
        </ProductDescription>
      </Modal.Body>
    </StyledModal>
  );
};

export default ProductModal;
