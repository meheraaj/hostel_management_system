import React from "react";
import LoginText from "../components/logintext";
import Primarybutton from "../components/primarybutton";

export default function Signup() {
  return (
    <div className=" max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:justify-center max-[1200px]:items-center grid grid-cols-2 h-screen bg">
      <div className="bg-[url('/lib_bg.png')] bg-cover bg-center"></div>
      <div className="flex items-center justify-center flex-col bg">
        <div className="flex flex-col items-center text-center">
          <span className={` text-[80px] pb-[25px]`}>Create Account</span>
        </div>

        <LoginText type="phone" placeholder="Student id" />
        <LoginText type="password" placeholder="Password" />

        <span className="text-[red]">
          {" "}
          ⚠️ Password should be at least 8 characters long. .
        </span>
        <Primarybutton button_text="Signup" href="/profile" />
        <span>Already have an account?</span>
        <Primarybutton button_text="Login" tsize="15px" href="/login" />
      </div>
    </div>
  );
}
