"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function MyDatePicker() {
  const [selected, setSelected] = useState(Date.now());

  return (
    <div className="p-4 w-max">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={
          selected ? `Selected: ${selected.toLocaleString()}` : "Pick a day."
        }
        className="bg-[#07021D4B] text-white rounded-[20px] rdp"
      />
    </div>
  );
}
