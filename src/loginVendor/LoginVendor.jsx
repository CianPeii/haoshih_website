import "bootstrap-icons/font/bootstrap-icons.css";

import LoginForm from "../components/LoginForm";

const LoginVendor = () => {
  return (
    <>
      <div className="p-5 ">
        <div className=" d-flex rounded-5 overflow-hidden ">
          {/* 一般用戶 */}
          <div className="bg-lake w-50 f-col-around p-5 gap-5 ">
            <div className="w-50">
              <img
                className=" w-100 f-center object-fit-contain"
                src="images/img/login2.png"
                alt=""
                style={{ height: "200px" }}
              />
            </div>
            <p className="text-center w-50 font-special fs-3 c-gray">
              分享創意，連結熱情 享受與客戶交流的美好
            </p>
            <i className="bi bi-arrow-left-circle h1 fw-bolder c-white"></i>
          </div>

          {/* 登入 */}

          <div className="bg-white w-50 f-col-center p-5  bg-lightGray">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginVendor;
