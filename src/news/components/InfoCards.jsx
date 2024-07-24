import InfoCard from "./InfoCard";
import styles from "./InfoCards.module.scss";

const InfoCards = () => {
  return (
    <>
      <div className="container my-5">
        <div
          className={`row  row-cols-4 justify-content-around overflow-y-hidden ${styles.infoCardsSize} `}
        >
          <InfoCard /> <InfoCard />
          <InfoCard /> <InfoCard />
          <InfoCard /> <InfoCard />
        </div>

        <div>
          <div className="text-center fs-5 m-5">
            查看更多
            <i className="bi bi-chevron-double-down"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCards;
