"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
// import {
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   FacebookAuthProvider,
//   getRedirectResult,
//   TwitterAuthProvider,
// } from "firebase/auth";
// import { auth } from "@/app/firebase";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
// import { useImageContext } from "../contextApi/imageContext";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import Link from "next/link";
import { useDashboardContext } from "../../contextApi/dashboardContext";
// import { auth } from "../../config/firebase";

interface AuthFormProps {
  signUpHandler?: (
    email: string,
    password: string,

    conformPassword: string
  ) => void;
  signInHandler?: (email: string, password: string) => void;
  signUp?: boolean;
  signIn?: boolean;
}
const AuthForm: React.FC<AuthFormProps> = ({
  signUp,

  signIn,
  signUpHandler,
  signInHandler,
}) => {
  const cancelButtonRef = useRef(null);
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const conformPasswordRef = useRef<any>();
  const modalActive = useDashboardContext();
  const openMy = modalActive.loggedIn;
  const setMyOpen = modalActive.setAuthHandler;
  const setImage = modalActive.setImageHandler;
  const setEmail = modalActive.setEmailHandler;
  const [admin, setAdmin] = useState(false);
  //   const modalCheck = useImageContext();
  //   const FethUserImage = useImageContext();
  //   const setUserImage = FethUserImage.userImageHandler;
  //   const setModalCheck = modalCheck.authModalHandler;
  //   const setSwitchModal = modalCheck.switchModalHandler;
  //   const modal = modalCheck.authModal;
  // const [myModal, setMyModal] = useState(modal);
  // useEffect(() => {
  //   setModalCheck(modal);
  // }, [myModal]);
  // useEffect(() => {
  //   console.log("admin logged in----->");
  // }, [admin]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     if (user) {
    //       setOpen(false);
    //       if (user.photoURL) {
    //         setImage(user?.photoURL);
    //       } else {
    //         setImage(user.email?.slice(0, 1) ?? "");
    //       }
    //     } else {
    //       // setOpen(true);
    //     }
    //     console.log("user--->", user);

    //     localStorage.setItem("Auth-admin", JSON.stringify(user));
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log("errorMessage--->", errorMessage);
    //     console.log("errorCode--->", errorCode);
    //   });

    // sign in Admin
    if (email === "fgrf25@gmail.com" && password === "faizan@12globaladmin") {
      setMyOpen(false);
    }

    // if (signIn && signInHandler !== undefined) {
    //   signInHandler(email, password);
    // }
  };
  //   const provider = new GoogleAuthProvider();
  //   const signInWithGoogle = async () => {
  //     try {
  //       const { user } = await signInWithPopup(auth, provider);
  //       console.log("user---->", user);
  //       console.log("userNameGoogle---->", user);
  //       if (user) {
  //         setOpen(false);
  //       }
  //       setImage(user?.photoURL ?? user?.displayName?.slice(0, 8) ?? "");
  //       setEmail(user?.email ?? "");
  //       localStorage.setItem("Auth-admin", JSON.stringify(user));
  //       console.log("user---->", user);
  //     } catch (error) {
  //       console.error("Sign-in error:", error);
  //     }
  //   };

  //   const signInBtnHandler = () => {
  //     const email = emailRef.current.value;
  //     const password = passwordRef.current.value;
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         const user = userCredential.user;
  //         if (user) {
  //           setOpen(false);
  //           if (user.photoURL) {
  //             setImage(user?.photoURL);
  //           } else {
  //             setImage(user.email?.slice(0, 1) ?? "");
  //           }
  //         } else {
  //           setOpen(true);
  //         }
  //         console.log("user--->", user);

  //         localStorage.setItem("user", JSON.stringify(user));
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log("errorMessage--->", errorMessage);
  //         console.log("errorCode--->", errorCode);
  //       });
  //   };

  return (
    <Transition.Root show={openMy} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setMyOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-green backdrop-blur-lg bg-opacity-30 bg-blend-multiply  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full  items-end justify-center p-4 sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0  sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative md:w-[400px] transform rounded-lg bg-lightGreen  shadow-xl transition-all sm:my-8 p-3">
                <div className="flex w-full h-full flex-col justify-center  text-black">
                  <div className="sm:mx-auto sm:w-full sm:max-w-md border p-5 pb-10 border-green rounded-xl bg-blue-700">
                    <form onSubmit={submitHandler} className="space-y-6 ">
                      <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-white ">
                        {signUp
                          ? "Sign Up Your Account!"
                          : "Sign in to Your Account!"}
                      </h2>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        ref={emailRef}
                        autoComplete="email"
                        placeholder="email..."
                        required
                        className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
                      />

                      <input
                        id="Password"
                        name="Password"
                        type="Password"
                        ref={passwordRef}
                        autoComplete="Password"
                        placeholder="password"
                        required
                        className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
                      />

                      {/* {signUp && (
                        <input
                          id="conformPassword"
                          name="conformPassword"
                          type="password"
                          ref={conformPasswordRef}
                          autoComplete="conformPassword"
                          placeholder="Conform Password"
                          required
                          className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
                        />
                      )} */}

                      <button
                        type="submit"
                        className="flex w-full mx-auto justify-center rounded-3xl  bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
                      >
                        {signUp ? " Sign up" : "Sign in"}
                      </button>

                      {/* <button
                        onClick={signInWithGoogle}
                        type="submit"
                        className="flex gap-1  md:gap-2 w-full justify-center items-center rounded-md md:px-3 border bg-lightGreen  py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
                        // onClick={submitHandler}
                      >
                        <FcGoogle className="w-5 h-5 mr-2  md:w-6 md:h-6" />{" "}
                        <span className="">CONTINUE WITH GOOGLE</span>
                      </button> */}
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AuthForm;
