import React, { useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Container } from "@mui/material";
import LoginModal from "../../Pages/Auth/LoginModal";
import SignUpModal from "../../Pages/Auth/SignUpModal";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const navContents = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Teachers",
      link: "/teachers",
    },
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const user = useSelector((state) => state.signup.user);
  const isLoggedIn = useSelector((state) => state.signup.isLoggedIn);
  sessionStorage.setItem("userInfo", JSON.stringify(user));
  sessionStorage.getItem("isLoggedIn", JSON.stringify(isLoggedIn));
  console.log("usercome", isLoggedIn);

  useEffect(() => {
    sessionStorage.setItem("userInfo", JSON.stringify(user));
    sessionStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [user, isLoggedIn]);

  const loggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn"));
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

  console.log("usercome2",loggedIn);
  return (
    <Container>
      <div className="flex items-center justify-center w-full mt-5 mb-5 font-sans">
        <div className="flex gap-48">
          <div className="flex gap-9">
            <div className="cursor-default hover:text-primary hover:font-semibold">
              Home
            </div>
            <div className="cursor-default hover:text-primary hover:font-semibold">
              About
            </div>
            <div className="cursor-default hover:text-primary hover:font-semibold">
              Courses
            </div>
            <div className="cursor-default hover:text-primary hover:font-semibold">
              Teachers
            </div>
            <div className="cursor-default hover:text-primary hover:font-semibold">
              News
            </div>
            <div className="cursor-default hover:text-primary hover:font-semibold">
              Contact
            </div>
          </div>
          <div className="flex gap-10">
            <div className="font-light cursor-default">
              {loggedIn === true ? (
                <>
                  <span>
                    <span className="text-sm hover:text-primary">
                      Logout / {userInfo}
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span className="text-sm hover:text-primary">
                    <LoginModal />
                  </span>{" "}
                  <span className="text-sm font-thin">/</span>{" "}
                  <span className="text-sm hover:text-primary">
                    <SignUpModal />
                  </span>
                </>
              )}
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
