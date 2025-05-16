import React from "react";

export default function LoginText({ type, placeholder }) {
  return (
    <input
      className={`bg-[white] rounded-[25px] text-[20px] w-[40%] max-[1200px]:w-[80%] h-[6vh] pl-[20px]  outline-none mt-[10px] my-[20px]`}
      type={type}
      placeholder={placeholder}
    ></input>
  );
}
