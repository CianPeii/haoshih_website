import NavBarShop from "../components/NavBarShop";
import MainBg from "../components/MainBg";
import Sections from "./components/Sections";
import AllVendorsCard from "./components/AllVendorsCard";
import PageBtn from "../components/PageBtn";
import Footer from "../components/Footer";
import styles from "./AllVendors.module.scss";

const AllVendors = () => {
  return (
    <>
      <NavBarShop />
      <MainBg title="市集商城" page="allVendors" />
      <Sections />
      <div className={`row p-5 ${styles.vendorBorder}`}>
        <AllVendorsCard />
        <AllVendorsCard />
        <AllVendorsCard />
        <AllVendorsCard />
        <AllVendorsCard />
      </div>
      <PageBtn />
      <Footer />
    </>
  );
};
export default AllVendors;
