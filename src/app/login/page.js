import React from "react";
import LoginText from "../components/logintext";
import Primarybutton from "../components/primarybutton";
export default function Login() {
  return (
    <div className="max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:justify-center max-[1200px]:items-center grid grid-cols-2 h-screen bg">
      <div className="bg-[url('/hall_bg1.png')] bg-cover bg-center"></div>
      <div className="flex items-center justify-center flex-col bg">
        <div className="flex flex-col items-center py-[20px]">
          <span className="text-[80px] pb-[25px]">Login</span>
          <span className="text-[25px]">
            Login with your student id and password.
          </span>
        </div>

        <LoginText type="phone" placeholder="Mobile no" />
        <LoginText type="password" placeholder="Password" />

        <span className="text-[red]">
          {" "}
          ⚠️ Student ID or password didn’t match. .
        </span>
        <Primarybutton button_text="Login" href="/profile" />

        <span> Don’t have an account?</span>

        <Primarybutton button_text="Signup" href="/signup" tsize="15px" />
      </div>
    </div>
  );
}
