import React from "react";
import Link from "next/link";

export default function IconsButton({
  button_text,
  href = "#",
  tsize,
  icons: Icon,
  button_text2,
}) {
  let myClas = `bg-[#FCFCFCFF] rounded-[5px] no-underline text-black inline-flex flex-col text-[black] items-center w-[250px] h-[180px] justify-center`;

  return (
    <Link href={href} className={myClas}>
      {Icon && <Icon size={35} />}
      <span className="text-[25px] ">{button_text}</span>
      <span className="text-[20px]">{button_text2}</span>
    </Link>
  );
}
