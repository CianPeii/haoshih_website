import NavBarShop from "../components/NavBarShop";
import MemberSideBar from "../components/MemberSideBar";
import { Container } from "react-bootstrap";
import SubTitleYellow from "../components/SubTitleYellow";
import Footer from "../components/Footer";

const Chartroom = () => {
  return (
    <>
      <NavBarShop />
      <div class="row mw-100 ">
        <div className="col-3  border-end border-3">
          <MemberSideBar />
        </div>

        <Container className="col-9">
          <SubTitleYellow title="聊天室" />
          <div className="container mt-5" style={{ maxWidth: "600px" }}>
            <div className="card">
              <div
                className="card-body"
                style={{ height: "400px", overflowY: "scroll" }}
              >
                <div />
              </div>
              <div className="card-footer position-relative">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="輸入訊息"
                    />
                    <div className="d-flex gap-2 mx-2 fs-3">
                      <i
                        className="bi bi-emoji-smile-fill"
                        style={{ cursor: "pointer" }}
                      />
                      <i
                        className="bi bi-image-fill"
                        style={{ cursor: "pointer" }}
                      />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        accept="image/*"
                      />
                      <button type="submit" className="btn btn-secondary">
                        送出
                      </button>
                    </div>
                  </div>
                </form>
                <div
                  className="position-absolute bg-white border rounded p-2"
                  style={{
                    bottom: "100%",
                    right: "0",
                    width: "255px",
                    maxHeight: "200px",
                    overflowY: "auto",
                    zIndex: 1000,
                  }}
                >
                  <img
                    style={{
                      width: "40px",
                      cursor: "pointer",
                      margin: "2px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default Chartroom;
