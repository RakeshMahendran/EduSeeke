import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-primary text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-4 border-b border-solid border-slate-200 rounded-t text-primary font-semibold text-lg italic">
                  Student - Teacher
                </div>
                <div className="flex items-center justify-center border-b border-solid border-slate-200 rounded-t text-primary font-semibold text-lg">
                  <div className="flex items-center justify-center bg-primary text-white w-full h-full p-3 italic">
                    Student
                  </div>
                  <div className="flex items-center justify-center bg-black text-white w-full p-3 italic">
                    Teacher
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form action="" className="flex flex-col gap-5">
                    <div className="flex flex-col items-start justify-start gap-3">
                      <label htmlFor="" className="text-primary font-semibold">
                        E-mail ID
                      </label>
                      <input
                        type="text"
                        value=""
                        placeholder="Enter your email"
                        className="outline-primary w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:px-2
                        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-3">
                      <label htmlFor="" className="text-primary font-semibold">
                        Password
                      </label>
                      <input
                        type="text"
                        value=""
                        placeholder="Enter your password"
                        className="outline-primary w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:px-2
                        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
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
                        <span className="relative group-hover:text-white">
                          Login
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-light">
                        Don't have an account ?
                      </span>
                      <span className="font-medium hover:font-semibold hover:text-lg text-primary">
                        Create
                      </span>
                    </div>
                    <button
                      onclick={() => setShowModal(false)}
                      className="bg-primary text-white px-2 rounded-lg uppercase"
                    >
                      Close
                    </button>
                  </form>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
