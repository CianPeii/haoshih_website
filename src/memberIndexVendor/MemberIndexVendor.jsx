import NavBarShop from "../components/NavBarShop";
import MemberVenderSideBar from "../components/MemberVenderSideBar";
import SubTitleYellow from "../components/SubTitleYellow";
import VendorForm from "../components/VendorForm";
import ChatBtn from "../components/ChatBtn";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const MemberIndexVendor = () => {
  const [vendorData, setVendorData] = useState(null);
  const { vid } = useParams();
  const updateProfileData = (newData) => {
    setVendorData(newData);
  };

  // console.log("User ID:", vid);

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3200/vendor/api/profile/${vid}`
        );
        setVendorData(response.data);
        // console.log("Vendor Data:", response.data); // 數據首次被獲取時在控制台顯示
      } catch (error) {
        console.error("Error fetching vendor data:", error);
      }
    };

    fetchVendorData();
  }, [vid]); // 空陣列表示這個效果只在組件首次渲染時運行

  return (
    <>
      <NavBarShop />
      <div class="row mw-100 bg-white">
        <div className="col-3  border-end border-3">
          <MemberVenderSideBar />
        </div>
        <div className="col-9 ">
          <SubTitleYellow title="會員資料" />

          {vendorData ? (
            <VendorForm
              profile={vendorData}
              onProfileUpdate={updateProfileData}
            />
          ) : (
            <p>Loading...</p>
          )}

          <ChatBtn />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MemberIndexVendor;
