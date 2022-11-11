import React from "react";

export interface ContinueButton {
  title: string;
  onClick?: any;
  full?: boolean;
  loading?: boolean;
  disabled?: boolean;
  submit?: boolean;
  className?: string;
  loadingColor?: string;
}

const Button = (setStep: {}) => {
  return (
    <button
      onClick={() => {
        //do nothing
      }}
      className="bg-macaw w-full hover:bg-humpback transition duration-300 text-white font-bold font-din text-xl rounded-lg py-3 px-5"
    >
      Continue
    </button>
  );
};

export default ContinueButton;
