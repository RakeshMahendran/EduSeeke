import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/auth/authSlice";

export default function Modal({}) {
  const tabActive = "Student";
  const { register, handleSubmit } = useForm();

  const [showModal, setShowModal] = useState(false);
  const [currentTab, setCurrentTab] = useState(tabActive);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const tabs = ["Student", "Teacher"];
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleStudentLogin = (data) => {
    console.log("Submitting student login form", data);
    dispatch(userLogin(data));
  };

  const handleTeacherLogin = (data) => {
    console.log("Submitting teacher login form", data);
    dispatch(userLogin(data));
  };
  const renderTab = () => {
    return (
      <div className="flex">
        {tabs.map((tab, i) => {
          const active = tab === currentTab;
          return (
            <div className="w-full" key={i}>
              <div
                className={`p-2 italic text-lg ${
                  active
                    ? " bg-primary text-white "
                    : "bg-white text-primary shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
                }`}
                onClick={() => setCurrentTab(tab)}
              >
                {tab}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderStudentForm = () => {
    return (
      <div className="relative p-6 flex-auto">
        <form
          action=""
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(handleStudentLogin)}
        >
          <div className="flex flex-col items-start justify-start gap-3">
            <label htmlFor="" className="text-primary font-semibold">
              E-mail ID
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-primary w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:px-2
                        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
              {...register("email")}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <label htmlFor="" className="text-primary font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="outline-primary w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:px-2
                        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
              {...register("password")}
              required
            />
          </div>
          <span className="items-end font-extralight flex justify-end text-primary hover:font-semibold">
            Forgot Password?
          </span>
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              type="submit"
              className="relative flex items-center justify-center px-6 py-1 text-lg w-min overflow-hidden font-semibold text-white  rounded-2xl cursor-default group bg-primary"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Login</span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="font-light">Don't have an account ?</span>
            <span className="font-medium hover:font-semibold hover:text-lg text-primary">
              Create
            </span>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="bg-primary text-white px-2 rounded-lg uppercase"
          >
            Close
          </button>
        </form>
      </div>
    );
  };

  const renderTeacherForm = () => {
    return (
      <div className="relative p-6 flex-auto">
        <form
          action=""
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(handleTeacherLogin)}
        >
          <div className="flex flex-col items-start justify-start gap-3">
            <label htmlFor="" className="text-primary font-semibold">
              E-mail ID
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-primary w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:px-2
                        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
              {...register("email")}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <label htmlFor="" className="text-primary font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="outline-primary w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:px-2
                        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
              {...register("password")}
              required
            />
          </div>
          <span className="items-end font-extralight flex justify-end text-primary hover:font-semibold"></span>
          <div className="flex flex-col items-start justify-start">
            <label htmlFor="" className="text-primary font-semibold">
              Code
            </label>
            <input
              type="text"
              placeholder="Enter your unique code"
              className="outline-primary w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:px-2
                        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
              {...register("uniqueCode")}
              required
            />
          </div>
          <span className="items-center justify-between font-extralight flex text-primary ">
            <span className="hover:font-semibold">Forgot Password?</span>
            <span className="hover:font-semibold"> Forgot Code?</span>
          </span>
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              type="submit"
              className="relative flex items-center justify-center px-6 py-1 text-lg w-min overflow-hidden font-semibold text-white  rounded-2xl cursor-default group bg-primary"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
              <span
                className="relative group-hover:text-white"
                onClick={() => {
                  handleTeacherLogin;
                }}
              >
                Login
              </span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="font-light">Don't have an account ?</span>
            <span className="font-medium hover:font-semibold hover:text-lg text-primary">
              Create
            </span>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="bg-primary text-white px-2 rounded-lg uppercase"
          >
            Close
          </button>
        </form>
      </div>
    );
  };

  const renderForm = () => {
    switch (currentTab) {
      case "Student":
        return <>{renderStudentForm()}</>;
      case "Teacher":
        return <>{renderTeacherForm()}</>;
    }
  };

  return (
    <>
      <button
        className="font-light cursor-default text-sm hover:text-primary hover:text-base"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto sm:w-2/6 md:w-2/4 lg:w-1/4 xl:w-1/4">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-4 rounded-t text-primary font-semibold text-lg italic">
                  Student - Teacher
                </div>
                {renderTab()}
                {renderForm()}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
