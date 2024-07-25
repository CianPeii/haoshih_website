import styles from "./AllVendorsCard.module.scss";
const AllVendorsCard = () => {
  return (
    <>
      <div className="col-3">
        <div className={`card p-3 mx-2  my-3 ${styles.cardBg}`}>
          <img
            className={styles.cardImg}
            src="https://www.designevo.com/res/templates/thumb_small/sweet-chocolate-doughnut.webp"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">店家名稱</h4>
            <p className={`card-text ${styles.cardText}`}>
              店家介紹，最多兩行最多兩行最多兩行
              店家介紹，最多兩行最多兩行最多兩行
            </p>
            <div className={styles.cardTag}>#標籤限制</div>
            <div className={styles.cardTag}>#最多四字</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllVendorsCard;
