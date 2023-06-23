import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Container } from "@mui/material";
import NavBar from "../../containers/HomePage/NavBar";
import LogoBar from "../../containers/HomePage/LogoBar";



const Home = () => {
  
  return (
    <div>
      <LogoBar />
      <hr className="border-gray-300" />
      <NavBar />
      <hr className="border-gray-300" />
    </div>
  );
};

export default Home;


