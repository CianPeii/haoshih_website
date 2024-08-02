import NavBarShop from "../components/NavBarShop";
import MainBg from "../components/MainBg";
import Sections from "./components/Sections";
import AllVendorsCard from "./components/AllVendorsCard";
import PageBtn from "../components/PageBtn";
import Footer from "../components/Footer";
import styles from "./AllVendors.module.scss";
import ChatBtn from "../components/ChatBtn";

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
      <ChatBtn />
    </>
  );
};
export default AllVendors;
