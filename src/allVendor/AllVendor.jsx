import NavBarShop from "../components/NavBarShop";
import MainBg from "../components/MainBg";
import Sections from "./components/Sections";
import AllVendorCards from "./components/AllVendorCards";
import PageBtn from "../components/PageBtn";
import Footer from "../components/Footer";

const AllVendor = () => {
  return (
    <>
      <NavBarShop />
      <MainBg title="市集商城" page="allVendor" />
      <Sections />
      <AllVendorCards />
      <PageBtn />
      <Footer />
    </>
  );
};
export default AllVendor;
