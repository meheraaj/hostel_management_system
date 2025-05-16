import React from "react";
import { RxAvatar } from "react-icons/rx";
import { FiHome } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { FiHexagon } from "react-icons/fi";

import IconsButton from "../components/iconButtons";

export default function Admin() {
  return (
    <div className="h-screen bg text-[white] flex flex-col items-center justify-evenly">
      <div className="flex text-[40px] items-center justify-center">
        <RxAvatar size={80} color="#00EB0CFF" />
        <span>Admin</span>
      </div>
      <div className="max-[1100px]:grid max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1 flex flex-row gap-[20px] items-center justify-center">
        <IconsButton
          button_text="Rooms"
          button_text2="Manage Room"
          icons={FiHome}
        />

        <IconsButton
          button_text="Student"
          button_text2="Manage Student"
          icons={MdOutlinePersonOutline}
        />

        <IconsButton
          button_text="Notification"
          button_text2="Send Notification"
          icons={RiNotification2Line}
        />

        <IconsButton
          button_text="Meal Managemenet"
          button_text2="Manage Meal"
          icons={FiHexagon}
        />
      </div>

      <div></div>
      <div></div>
    </div>
  );
}
