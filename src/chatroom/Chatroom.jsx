import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";
import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBarShop from "../components/NavBarShop";
import MemberSideBar from "../components/MemberSideBar";
import SubTitleYellow from "../components/SubTitleYellow";
import Footer from "../components/Footer";
import { stickerPack } from "./stickerPack";
import Message from "./Message";

const socket = io("http://localhost:3200");

// 顏色陣列
const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F06292",
  "#BA68C8",
  "#7986CB",
  "#4FC3F7",
  "#4DB6AC",
];

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [showStickers, setShowStickers] = useState(false);
  const [username] = useState(
    "使用者" + Math.floor(Math.random() * 1000) + ":"
  );
  const [userColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const cartVisible = 1;

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off("chat message");
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (type, content) => {
    socket.emit("chat message", {
      type,
      content,
      username,
      timestamp: new Date().toLocaleTimeString(),
      color: userColor, // 添加顏色資訊
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage) {
      sendMessage("text", inputMessage);
      setInputMessage("");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => sendMessage("image", reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <NavBarShop cartVisible={cartVisible}/>
      <div className="row mw-100 ">
        <div className="col-3  border-end border-3">
          <MemberSideBar />
        </div>

        <Container className="col-9">
          <SubTitleYellow title="聊天室" />
          {/* start */}
          <div className="container mt-5" style={{ maxWidth: "600px" }}>
            <div className="card">
              <div
                className="card-body"
                style={{ height: "400px", overflowY: "scroll" }}
                ref={chatContainerRef}
              >
                {messages.map((msg, index) => (
                  <Message key={index} msg={msg} />
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="card-footer position-relative">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="輸入訊息"
                    />
                    <div className="d-flex gap-2 mx-2 fs-3">
                      <i
                        className="bi bi-emoji-smile-fill"
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowStickers(!showStickers)}
                      />
                      <i
                        className="bi bi-image-fill"
                        style={{ cursor: "pointer" }}
                        onClick={() => fileInputRef.current.click()}
                      />
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                        accept="image/*"
                      />
                      <button type="submit" className="btn btn-secondary">
                        送出
                      </button>
                    </div>
                  </div>
                </form>
                {showStickers && (
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
                    {stickerPack.map((sticker) => (
                      <img
                        key={sticker.id}
                        src={sticker.url}
                        alt={sticker.alt}
                        style={{
                          width: "40px",
                          cursor: "pointer",
                          margin: "2px",
                        }}
                        onClick={() => {
                          sendMessage("sticker", sticker.url);
                          setShowStickers(false);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default Chatroom;
