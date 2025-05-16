import React from "react";

const DropdownButton = ({ options, placeholder }) => {
  return (
    <div className="relative w-[35%] mt-[10px]">
      <select className="bg-[white] rounded-[25px] text-[20px] w-full h-[5vh] px-[50px] outline-none appearance-none">
        <option disabled selected>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none"></div>
    </div>
  );
};

export default DropdownButton;
