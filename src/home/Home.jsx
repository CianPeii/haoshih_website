import NavBar from "../components/NavBar";
import Main from "./components/Main";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "../components/Footer";
import RainAnimation from '../weather/RainAnimation';
import React, { useState, useEffect } from 'react';
const Home = () => {
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    // 這裡可以根據實際天氣數據或其他邏輯來設置 isRaining
    // 例如，可以使用 WeatherApp 組件的數據
    // 這裡僅為示例，設置為 true
    setIsRaining(true);
  }, []);
  return (
    <>
      <RainAnimation isRaining={true} />
      <NavBar></NavBar>
      <Main></Main>
      <About></About>
      <Menu></Menu>
      <Footer></Footer>
    </>
  );
};

export default Home;
