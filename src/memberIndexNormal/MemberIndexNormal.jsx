import NavBarShop from "../components/NavBarShop";
import MemberSideBar from "../components/MemberSideBar";
import SubTitleYellow from "../components/SubTitleYellow";
import MemberForm from "../components/MemberForm";
import ChatBtn from "../components/ChatBtn";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
const MemberIndexNormal = (props) => {
  const [memberData, setMemberData] = useState(null);
  const { uid } = useParams();

  // 現在可以使用 uid 變數
  // console.log("User ID:", uid);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3200/api/member/profile/${uid}`
        );
        setMemberData(response.data);
        // console.log("Member Data:", response.data); // 數據首次被獲取時在控制台顯示
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    };

    fetchMemberData();
  }, []); // 空陣列表示這個效果只在組件首次渲染時運行

  // console.log("Current memberData state:", memberData); // 每次重新渲染時顯示當前的 memberData 狀態

  return (
    <>
      <NavBarShop />
      <div class="row mw-100 bg-white">
        <div className="col-3  border-end border-3">
          <MemberSideBar />
        </div>
        <div className="col-9 ">
          <SubTitleYellow title="會員資料" />

          {memberData ? <MemberForm profile={memberData} /> : <p>Loading...</p>}

          <ChatBtn />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberIndexNormal;
