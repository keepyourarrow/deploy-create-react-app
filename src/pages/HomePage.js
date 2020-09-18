import React from "react";
import { Achievements } from "../components/Achievements";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Help } from "../components/Help";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import { Tilda } from "../components/Tilda";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Achievements />
      <Main />
      <Footer />
      <Tilda />
      <Help />
    </div>
  );
};

export default HomePage;
