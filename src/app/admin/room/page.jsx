import React from "react";

import { FiHome } from "react-icons/fi";

import IconsButton from "@/app/components/iconButtons";

export default function Admin() {
  return (
    <div className="h-screen bg text-[white] flex flex-col">
      <div className="flex text-[40px] items-center justify-center">
        <IconsButton button_text="Room management" icons={FiHome} />
      </div>
      <div className="flex flex-row gap-[20px] items-center justify-center">
        <span>1st Floor</span>
        <br />
        <IconsButton button_text="101" icons={FiHome} />
      </div>

      <div></div>
      <div></div>
    </div>
  );
}
