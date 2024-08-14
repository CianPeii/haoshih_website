import "bootstrap-icons/font/bootstrap-icons.css";
import LoginForm from "../components/LoginForm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginNormal = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    console.log("LoginNormal handleSubmit", formData);
    try {
      const response = await axios.post('http://localhost:3200/login', {
        account: formData.account,
        password: formData.password,
        userType: 'member'
      });

      if (response.data.success) {
        console.log('登入成功', response.data);
        const { uid, userType } = response.data;
        
        // 獲取會員暱稱
        const nicknameResponse = await axios.get(`http://localhost:3200/login/${uid}`);
        const { nickname } = nicknameResponse.data;

        // 將用戶信息存儲到 localStorage
        const userData = {
          uid,
          nickname,
        };
        localStorage.setItem('user', JSON.stringify(userData));        

        // 導航到用戶主頁
        navigate(`/${userType}/${uid}`);
      } else {
        setError(response.data.error || '登入失敗');
      }
    } catch (error) {
      console.error('登入失敗:', error);
      setError('帳號或密碼錯誤，請重新輸入');
    }
  };

  return (
    <>
      <div className="p-5 ">
        <div className=" d-flex rounded-5 overflow-hidden ">
          {/* 一般用戶 */}
          <div className="bg-primary w-50 f-col-around p-5 gap-5">
            <div className="w-50">
              <img
                className=" w-100 f-center object-fit-cover "
                src="images/img/login1.png"
                alt=""
                style={{ height: "200px" }}
              />
            </div>
            <p className="text-center w-50 font-special fs-2">
              探索創意，感受熱情，享受與創作者交流的美好一切
            </p>
            <i className="bi bi-arrow-left-circle fs-3 fw-bolder c-white fs-1"></i>
          </div>

          {/* 登入 */}
          <div className="w-50 f-col-center p-5 bg-glass">
            {error && <div className="error-message">{error}</div>}
            <LoginForm onSubmit={handleSubmit} buttonText="登入" userType="member" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginNormal;