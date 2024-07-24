import styles from "./ShopCards.module.scss";

const ShopCards = () => {
  return (
    <>
      <div className={`mx-5 my-2 p-5 ${styles.ShopBorder}`}>
        <div class="col-sm-3">
          <div className="card p-3">
            <img
              src="https://www.hoganbakery.com.tw/wp-content/uploads/2022/12/%E7%94%A2%E5%93%81%E7%85%A7-%E5%AE%98%E7%B6%B2-%E6%89%8B%E5%B7%A5%E9%A4%85%E4%B9%BE-%E8%83%A1%E6%A1%83%E5%B7%A7%E5%85%8B%E5%8A%9B-%E7%BE%8E%E5%BC%8F%E8%BB%9F%E9%A4%85%E4%B9%BE.jpg"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">霏妮嗜塔</h5>
              <p className="card-text">
                在都市中，最多兩行最多兩行最多兩行最多兩行最多兩行,在都市中，最多兩行最多兩行最多兩行最多兩行最多兩行......
              </p>
              <div>#最多四字</div>
              <div>#最多四字</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCards;
