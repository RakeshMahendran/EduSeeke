import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Container } from "@mui/material";
import LoginModal from '../../Pages/Auth/LoginModal'
import SignUpModal from "../../Pages/Auth/SignUpModal";

const NavBar = () => {
  

  
  return (
    <Container>
      <div className="flex items-center justify-center w-full mt-5 mb-5 font-sans">
        <div className="flex gap-48">
          <div className="flex gap-9">
            <div className="cursor-default hover:text-primary hover:font-semibold">Home</div>
            <div className="cursor-default hover:text-primary hover:font-semibold">About</div>
            <div className="cursor-default hover:text-primary hover:font-semibold">Courses</div>
            <div className="cursor-default hover:text-primary hover:font-semibold">Teachers</div>
            <div className="cursor-default hover:text-primary hover:font-semibold">News</div>
            <div className="cursor-default hover:text-primary hover:font-semibold">Contact</div>
          </div>
          <div className="flex gap-10">
            <div className="font-light cursor-default">
              <span className="text-sm hover:text-primary"><LoginModal/></span>{" "}
              <span className="text-sm font-thin">/</span>{" "}
              <span className="text-sm hover:text-primary"><SignUpModal/></span>
            </div>
            <div>
              <ShoppingCartOutlinedIcon
                sx={{ "& :hover": { color: "#4D5FE3" } }}
                style={{ fontSize: "35px" }}
              />
            </div>
            <div className="relative flex items-center justify-center px-8 overflow-hidden text-sm font-semibold text-white uppercase rounded-lg cursor-default group bg-primary">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Search</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
