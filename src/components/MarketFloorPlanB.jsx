import React,  { useEffect, useState }from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./MarketFloorPlan.module.scss";


const MarketFloorPlan = ({fetchData}) => {
  const [selectedStalls, setSelectedStalls] = useState(new Set());
  const booths = [
    ["A01", "A02", "A03", "A04", "A05"],
    ["B01", "B02", "B03", "B04", "B05"],
    ["C01", "C02", "C03", "C04", "C05"],
    ["D01", "D02", "D03", "D04", "D05"],
  ];
  const getBoothClass = (booth) => {
    if (["A01", "A02", "B02", "C02", "D01", "D02"].includes(booth))
      return "bg-red";
    if (["A03", "B01", "C01"].includes(booth)) return "bg-gray";
    return "bg-secondary";
  };
  const handleClick = (event) => {
    const element = event.target;
    console.log(element);
    if(element.classList.contains("bg-lightBlue")) {
      //如果已經是bg-lightBlue，則恢復originalClass
      element.classList.remove("bg-lightBlue");
      if(element.dataset.originalClass  === "bg-red") {
        element.classList.add("bg-red");
      }else {
        element.classList.add("bg-secondary");
      }
    }else {
      element.dataset.originalClass = element.classList.contains("bg-red") ? "bg-red" : "bg-secondary";
      element.classList.remove("bg-red", "bg-secondary");
      element.classList.add("bg-lightBlue")
    }
    
    const vendors = element.innerText;
    // element.classList.toggle(`${styles.clicked}`);
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
                  className={`${styles.stall} ${styles.hover} ${getBoothClass(position[rowIndex] + vendor_unmber[colIndex])}`}
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
