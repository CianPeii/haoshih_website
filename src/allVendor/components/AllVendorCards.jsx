import styles from "./AllVendorCards.module.scss";
import AllVendorCard from "./AllVendorCard";

const AllVendorCards = () => {
  return (
    <>
      <div className={`row p-5 ${styles.vendorBorder}`}>
        <AllVendorCard />
        <AllVendorCard />
        <AllVendorCard />
        <AllVendorCard />
        <AllVendorCard />
        <AllVendorCard />
        <AllVendorCard />
        <AllVendorCard />
      </div>
    </>
  );
};

export default AllVendorCards;
