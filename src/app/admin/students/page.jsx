import React from "react";
import Image from "next/image";
import StudetnsCard from "@/app/components/studentscard";
export default function Studetnts() {
  return (
    <div className=" bg flex flex-col items-center bg justify-start h-screen max-[1000px]:w-[1000px]">
      <div className="bg-[#3D061571] rounded-[20px] text-[white] flex items-center justify-between w-[80%] text-[22px] h-[100px] px-[10px] rounded-[5px] text-center whitespace-nowrap truncate my-[10px] ">
        <span className="w-[100%]">All Students</span>
      </div>
      <StudetnsCard />
      <StudetnsCard
        name="Meherajul islam"
        Id="C233267"
        dep="CSE"
        rno="512"
        cgpa="3.99"
        meal="20"
        mfee="500"
        msr="165"
        free="1800"
      />
      <StudetnsCard
        name="Meherajul islam"
        Id="C233267"
        dep="CSE"
        rno="512"
        cgpa="3.99"
        meal="20"
        mfee="500"
        free="1800"
        msr="165"
      />
      <StudetnsCard
        name="Meherajul islam"
        Id="C233267"
        dep="CSE"
        rno="512"
        cgpa="3.99"
        meal="20"
        mfee="500"
        free="1800"
        msr="165"
      />
    </div>
  );
}
