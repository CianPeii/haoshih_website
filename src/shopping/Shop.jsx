import NavBarShop from "../components/NavBarShop";
import MainBg from "../components/MainBg";
import Sections from "./components/Sections";
import ShopCards from "./components/ShopCards";

const Shop = () => {
  return (
    <>
      <NavBarShop />
      <MainBg title="市集商城" page="shop" />
      <Sections />
      <ShopCards />
    </>
  );
};
export default Shop;
