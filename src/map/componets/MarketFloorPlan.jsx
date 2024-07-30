import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./MarketFloorPlan.module.scss";

const MarketFloorPlan = () => {
  return (
    <Container fluid className={styles.container}>
      <Row className={styles.floorPlanRow}>
        <Col>
          <div className={styles.floorPlan}>
            <div className={styles.mainStage}>主舞台</div>

            {[...Array(4)].map((_, rowIndex) => (
              <div
                key={rowIndex}
                className={styles.stallRow}
                style={{ top: `${20 + rowIndex * 20}%` }}
              >
                {[...Array(5)].map((_, colIndex) => (
                  <div key={colIndex} className={styles.stall} />
                ))}
              </div>
            ))}
            <div>
              <div>
                <span
                  className={`${styles.dot2} ${styles.dotYellow}`}
                  style={{ left: "5%", top: "10%" }}
                />
                <span
                  className={`${styles.dot2} ${styles.dotBlue}`}
                  style={{ left: "5%", bottom: "10%" }}
                />
                <span
                  className={`${styles.dot2} ${styles.dotYellow}`}
                  style={{ right: "5%", bottom: "10%" }}
                />
              </div>
            </div>

            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${styles.dotRed}`}
                style={{ left: `${30 + index * 20}%`, top: "10%" }}
              />
            ))}
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={`${styles.dot2} ${styles.dotRed}`}
                style={{ left: `${30 + index * 20}%`, bottom: "10%" }}
              />
            ))}
          </div>
        </Col>
      </Row>

      <Row className={styles.footer}>
        <Col>
          <div className="f-end fs-5 c-gray">點擊尋找 → </div>
        </Col>
        <Col xs="auto" className="d-flex gap-3">
          <Button
            size="sm"
            className={`bg-secondary border-0 ${styles.iconButton}`}
          >
            <img src="images/icon/Toilet.png" alt="" />
          </Button>
          <Button size="sm" className={`bg-pink border-0 ${styles.iconButton}`}>
            <img src="images/icon/Bench.png" alt="" />
          </Button>
          <Button size="sm" className={`bg-lake border-0 ${styles.iconButton}`}>
            <img src="images/icon/Trash.png" alt="" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MarketFloorPlan;
