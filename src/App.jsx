import { Navbar, useState } from "react-bootstrap";
import Layout from "./Layout";
import "./style.scss";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  );
}

export default App;
