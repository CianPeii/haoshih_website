import { Row, Col, Image } from "react-bootstrap";
import styles from "../components/OrderItem.module.scss";

const OrderItem = (props) => {
  const { product, img, qty } = props;
  return (
    <>
      <Row className="mb-3">
        <Col xs={2}>
          <div className={styles.imgContainer}>
            <Image src={img} className={styles.productImg} />
          </div>
        </Col>
        <Col xs={6}>
          <h5>{product.name}</h5>
          <p className="mb-0">x {qty}</p>
        </Col>
        <Col xs={4} className="text-end">
          <h5>NT$ {product.price}</h5>
        </Col>
      </Row>
    </>
  );
};
export default OrderItem;
