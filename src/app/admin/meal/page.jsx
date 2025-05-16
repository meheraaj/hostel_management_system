import React from "react";
import MyDatePicker from "@/app/components/custom/datepicker";

export default function Login() {
  return (
    <div className="grid grid-cols-2 h-screen bg">
      <div className="flex justify-center items-center">
        <MyDatePicker />
      </div>
      <div className="flex justify-center items-center">Hi</div>
    </div>
  );
}
