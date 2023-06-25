import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Container } from "@mui/material";
import NavBar from "../../containers/HomePage/NavBar";
import LogoBar from "../../containers/HomePage/LogoBar";
import InfoCard from "../../containers/HomePage/InfoCard";
import Footer from "../../containers/Footer/Footer";



const Home = () => {
  
  return (
    <div>
      <LogoBar />
      <hr className="border-gray-300" />
      <NavBar />
      <hr className="border-gray-300" />
      <InfoCard/>
      <Footer/>
    </div>
  );
};

export default Home;


