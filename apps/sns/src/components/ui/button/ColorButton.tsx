import React from "react";

type Props = {
  text: string;
  onClick: () => void;
  size?: "small" | "big";
};

const ColorButton = ({ text, onClick, size = "small" }: Props) => {
  return (
    <div
      className={`flex items-center text-center rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem] ${
        size === "big" ? "p-[0.3rem]" : "p-[0.15ren]"
      }`}
    >
      <button
        onClick={onClick}
        className={`bg-white rounded-sm text-xs  p-[0.2rem] hover:opacity-90 transition-opacity ${
          size === "big" && "p-2 text-xl"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default ColorButton;
