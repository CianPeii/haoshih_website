import NavBarShop from "../components/NavBarShop";
import MemberSideBar from "../components/MemberSideBar";
import MemberForm from "../components/MemberForm";
import MemberOrderNormal from "../MemberOrderNormal/MemberOrderNormal";
import ChatBtn from "../components/ChatBtn";
import Footer from "../components/Footer";
import SubTitleYellow from "../components/SubTitleYellow";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Routes, Route, Outlet } from "react-router-dom";

const MemberIndexNormal = (props) => {
  const [memberData, setMemberData] = useState(null);
  const { uid } = useParams();
  const updateProfileData = (newData) => {
    setMemberData(newData);
  };

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3200/member/profile/${uid}`
        );
        setMemberData(response.data);
        // console.log("Member Data:", response.data); // 數據首次被獲取時在控制台顯示
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    };
    fetchMemberData();
  }, [uid]); // 空陣列表示這個效果只在組件首次渲染時運行

  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3200/member/orderList/${uid}`
        );
        setOrderData(response.data);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };
    fetchOrderData();
  }, [uid]);

  const MemberProfile = () => (
    <>
      <SubTitleYellow title="會員資料" />
      {memberData ? (
        <MemberForm profile={memberData} onProfileUpdate={updateProfileData} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );

  return (
    <>
      <NavBarShop />
      <div class="row mw-100 bg-white">
        <div className="col-3  border-end border-3">
          <MemberSideBar />
        </div>
        <div className="col-9 bg-white">
          <Routes>
            <Route index element={<MemberProfile />} />
            <Route
              path="order"
              element={
                orderData ? (
                  <MemberOrderNormal orderData={orderData} />
                ) : (
                  <p>Loading...</p>
                )
              }
            />
            {/* <Route path="like" element={<MemberLike />} /> */}
          </Routes>
          <Outlet />
          <ChatBtn />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberIndexNormal;
