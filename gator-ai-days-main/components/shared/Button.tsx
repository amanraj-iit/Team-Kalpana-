import React from "react";

export interface ButtonProps {
  title: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-macaw w-full hover:bg-humpback transition duration-300 text-white font-bold font-din text-xl rounded-lg py-3 px-5"
    >
      {title}
    </button>
  );
};

export default Button;
