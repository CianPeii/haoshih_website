import styles from "./SingUpMain.module.scss";
const SingUpMain = () => {
  return (
    <>
      <div className={`position-relative overflow-hidden ${styles.mainBg}`}>
        <div className={`position-absolute end-0 ${styles.mainImg}`}>
          <img className="w-100" src="images/img/sun.png" alt="" />
        </div>
        <div
          className={`bg-secondary fs-1 font-special position-absolute start-0 px-4 ${styles.mainTitle}`}
        >
          一般會員註冊
        </div>
      </div>
    </>
  );
};
export default SingUpMain;
