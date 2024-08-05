import React from "react";

export default function Line({ width, color, height }) {
  return (
    <div
      style={{ width: width, height: height }}
      className={`${width && "w-full"} ${color ? color : "bg-light-gray"} ${
        height ? `h-[${height}]` : "h-[2px]"
      } line`}
    ></div>
  );
}
