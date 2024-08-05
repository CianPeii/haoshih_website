import { Row, Col, Image } from "react-bootstrap";
import styles from "../components/OrderItem.module.scss";

const OrderItem = () => {
  return (
    <>
      <Row className="mb-3">
        <Col xs={2}>
          <div className={styles.imgContainer}>
            <Image
              src="https://www.shinehouse.com.tw/cdn/shop/products/british-earl-grey-cake-6-669672.jpg?v=1718094874"
              className={styles.productImg}
            />
          </div>
        </Col>
        <Col xs={6}>
          <h5>芒果戚風蛋糕</h5>
          <p className="mb-0">x 1</p>
        </Col>
        <Col xs={4} className="text-end">
          <h5>NT$ 240</h5>
        </Col>
      </Row>
    </>
  );
};
export default OrderItem;
