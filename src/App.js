import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Possibilty,
  Feature,
  Header,
  WhatGPT3,
} from "./container";
import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibilty />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
