import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./components/primarybutton";
import { Poppins } from "next/font/google";
import { RxDividerHorizontal } from "react-icons/rx";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`bg h-screen ${poppins.className}`}>
      <div className="flex flex-row justify-between items-center  h-[7vh] bg-[#05010E4F] px-[20px]">
        <span className="text-[25px] ">
          Mehe <span className="text-[25px] text-[#DFB7E9FF]">raj</span>
        </span>
        <div className="text-[20px]">
          <Link
            className="no-underline text-[white] px-[5px] hover:text-[#FDF90AFF]"
            href={"/admin/"}
          >
            Admin
          </Link>
          <Link
            className="no-underline text-[white] hover:text-[#FDF90AFF]  px-[5px]"
            href={"/admin/students"}
          >
            Students
          </Link>
          <Link
            className="no-underline hover:text-[#FDF90AFF] text-[white] px-[5px]"
            href={"/admin/room"}
          >
            Room
          </Link>
          <Link
            className="no-underline hover:text-[#FDF90AFF] text-[white] px-[5px]"
            href={"/admin/meal"}
          >
            Meal
          </Link>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col items-center justify-center h-[90vh] ">
        <div className="text-[30px] px-[10%] text-center">
          <span className="flex flex-col items-center">
            <span className="text-[#EBCECEFF] text-[60px]">
              Hall Management System
            </span>
            <div class="border-t border-[yellow] my-[10px] w-[50%]"></div>
            Manage meals, accommodations, and more—all in one place
          </span>
          <span>Streamline Your Campus Living Experience</span>
        </div>

        <div className="py-[50px] flex flex-row">
          <PrimaryButton button_text={"Login"} href="/login" />
          <div className="px-[10px]"></div>
          <PrimaryButton button_text={"Signup"} href="/signup" />
        </div>
      </div>
    </div>
  );
}
