import React from "react";
import Image from "next/image";

export default function StudetnsCard({
  name = "Name",
  Id = "ID",
  dep = "Department",
  free = "Hall Fee",
  mfee = "Meal Fee",
  rno = "Room No",
  msr = "Meal Serial",
  meal = "Meal",
  cgpa = "CGPA",
}) {
  const imgtag = () => {
    if (name != "Name") {
      return (
        <Image
          src="/av.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      );
    } else {
      return <div className="w-[100px]"></div>;
    }
  };
  return (
    <div className="bg-[#08000A2D] rounded-[20px] text-[white] flex items-center justify-between w-[80%] max-[1300px]:w-[100%] text-[22px]  h-[100px] px-[10px] max-[1100px]:px-[0px] rounded-[5px] text-center whitespace-nowrap truncate my-[10px] max-[1000px]:w-[1000px]">
      {imgtag()}
      <span className="w-[130px] max-[1000px]:text-[15px]">{name}</span>
      <span className="w-[100px] max-[1000px]:text-[16px]">{Id}</span>
      <span className="w-[100px] max-[1000px]:text-[14px]">{dep}</span>
      <span className="w-[100px]">{free}</span>
      <span className="w-[100px]">{mfee}</span>
      <span className="w-[100px]">{rno}</span>
      <span className="w-[100px]">{msr}</span>
      <span className="w-[100px]">{meal}</span>
      <span className="w-[100px]">{cgpa}</span>
    </div>
  );
}
