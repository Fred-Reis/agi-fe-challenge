"use client";

import { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

import { Picker } from "@/assets/picker";

export const ColorPicker = () => {
  const [visibleColorPicker, setVisibleColorPicker] = useState(false);
  const [color, setColor] = useState<any>();

  return (
    <div className="relative block cursor-pointer bg-[#fff]">
      <p
        onClick={() => setVisibleColorPicker(!visibleColorPicker)}
        className="font-semibold mt-12 md:mt-6 text-primary flex items-center gap-2"
      >
        Personalize a cor
        <Picker />
      </p>
      {visibleColorPicker && (
        <div className="absolute top-[-250px]">
          <HexColorPicker color={color} onChange={setColor} />
          <div className="h-10 -mt-2" style={{ backgroundColor: color }} />
          <HexColorInput
            style={{
              width: "100%",
              height: "35px",
              border: "solid 2px #64748B",
              borderRadius: "0 0 5px 5px",
              borderTop: "0",
              textAlign: "center",
            }}
            color={color}
            onChange={setColor}
            prefixed
            alpha
          />
        </div>
      )}
    </div>
  );
};
