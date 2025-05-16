import React from "react";
import LoginText from "../components/logintext";
import Primarybutton from "../components/primarybutton";
import DropdownButton from "../components/dropdownbtn";
import ProfileImageUpload from "../components/imageup";
export default function Login() {
  return (
    <div className="grid grid-cols-2 h-screen bg">
      <div className="bg-[#C6686C]">
        <span className="text-[40px]">Profile</span>
        <div className="flex items-center justify-center flex-col self-center h-[90vh]">
          <ProfileImageUpload />
          <span className="text-[40px]">Profile Picture</span>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <LoginText type="phone" placeholder="Name" />
        <LoginText type="password" placeholder="Address" />
        <LoginText type="phone" placeholder="Room Number" />
        <LoginText type="password" placeholder="Meal Serial No" />
        <DropdownButton
          placeholder="Current Semester*"
          options={["Semester 1", "Semester 2", "Semester 3"]}
        />
        <DropdownButton
          placeholder="Department*"
          options={["CSE", "EEE", "ME", "CIVIL", "QSIS"]}
        />

        <Primarybutton button_text="Done" href=""/>
      </div>
    </div>
  );
}
