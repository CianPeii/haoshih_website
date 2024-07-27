import styles from "./VendorCard.module.scss";
const VendorCard = () => {
  return (
    <>
      <div className="col-3">
        <div className={`card ${styles.cardBg}`}>
          <img
            className="rounded-3 overflow-hidden mx-3 mt-3"
            src="https://shoplineimg.com/605c41d671de61000e764af1/642a397ee9f3d8001a66ca84/800x.jpg?"
            alt=""
          />
          <div className="card-body">
            <h6 className={`card-title ${styles.cardTitle}`}>
              商品名稱最多兩行 商品名稱最多兩行 商品名稱最多兩行
            </h6>
            <p className="card-text text-center text-danger">NT$240</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default VendorCard;
