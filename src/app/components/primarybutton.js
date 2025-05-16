import React from "react";
import Link from "next/link";

export default function PrimaryButton({ button_text, href = "#", tsize }) {
  let myClas = `bg-[#ec221f] rounded-[5px] text-white px-[30px] py-[7px] text-[${
    tsize ?? "25px"
  }] inline-block no-underline text-[white] my-[10px] hover:bg-[transparent] border-1 border-transparent hover:rounded-[0px] hover:border-[white]`;

  return (
    <Link href={href} className={myClas}>
      {button_text}
    </Link>
  );
}
