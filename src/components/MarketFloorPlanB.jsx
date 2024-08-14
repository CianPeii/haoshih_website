import React,  { useEffect, useState }from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./MarketFloorPlan.module.scss";


const MarketFloorPlan = ({fetchData}) => {
  const [selectedStalls, setSelectedStalls] = useState(new Set());
  const handleClick = (event) => {
    const element = event.target;
    const vendors = element.innerText;
    element.classList.toggle(`${styles.clicked}`);
    const newSelectedStalls = new Set(selectedStalls);

    if (newSelectedStalls.has(vendors)) {
      // 如果已經選擇了，則移除並清空資料
      newSelectedStalls.delete(vendors);
      fetchData(''); // 清空父元件資料
    } else {
      // 如果未選擇，則添加
      newSelectedStalls.add(vendors);
      fetchData(vendors); // 更新父元件資料
    }

    setSelectedStalls(newSelectedStalls);
    // fetchData(vendors)
    console.log(vendors);
  };
  const position = ["A", "B", "C", "D"];
  const vendor_unmber = ["01", "02", "03", "04", "05"];
  
  return (
    <Container fluid className={styles.containerSize}>
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
                  <div key={colIndex} 
                  className={`${styles.stall} ${styles.hover} `}
                  onClick={handleClick}
                  >
                    {position[rowIndex] + vendor_unmber[colIndex]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <br />
      <Row className={styles.footer}>
      </Row>
    </Container>
  );
};

export default MarketFloorPlan;
