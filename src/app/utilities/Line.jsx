import React from "react";

export default function Line({ width, color }) {
  return (
    <div
      style={{ width: width }}
      className={`${width && "w-full"} ${
        color ? color : "bg-light-gray"
      } h-[2px] line`}
    ></div>
  );
}
