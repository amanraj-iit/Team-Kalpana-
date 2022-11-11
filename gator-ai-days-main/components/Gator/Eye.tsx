import React from "react";

const Eye = ({
  top,
  left,
  size,
  pupilSize,
}: {
  top: string;
  left: string;
  size: string;
  pupilSize: string;
}) => {
  return (
    <div
      style={{
        top,
        left,
        width: size,
        height: size,
      }}
      className="eye absolute w-5 h-5 flex items-end justify-end"
    >
      <div
        style={{
          width: pupilSize,
          height: pupilSize,
        }}
        className="bg-black rounded-full"
      ></div>
    </div>
  );
};

export default Eye;
