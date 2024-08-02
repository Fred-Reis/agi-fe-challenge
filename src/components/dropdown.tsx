"use client";

import { useState } from "react";

import { Arrow } from "@/assets/arrow";

interface DropdownProps {
  handleSelect: (value: String) => void;
  selectedValue: String;
  options: String[];
}

export const Dropdown = ({
  selectedValue,
  handleSelect,
  options,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleGetValue = (value: String) => {
    handleSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="w-full h-10 rounded-lg border-2 text-base text-font_color-default border-slate-200">
      <div className="relative ">
        <button
          type="button"
          className={`w-full flex justify-between px-4 py-2 text-white font-medium rounded-lg text-sm items-center ${selectedValue ? "text-font_color-default" : "text-font_color-weak"} }`}
          onClick={toggleDropdown}
        >
          {selectedValue ? selectedValue : "Escolha o segmento"}
          <Arrow color="#94A3B8" />
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-full h-12 rounded-lg text-base text-font_color-default">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              className="rounded-lg border-2 text-base bg-[#fff] text-font_color-default border-slate-200 overflow-hidden"
            >
              {options.map((segment) => (
                <li
                  key={String(segment)}
                  className="block px-4 py-2 text-sm text-font_color-default hover:bg-gray-100"
                  onClick={() => handleGetValue(segment)}
                >
                  {segment}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
