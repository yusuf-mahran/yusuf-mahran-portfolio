import Image from "next/image";
import Line from "../utilities/Line";
import Para from "../utilities/Para";
import SubHeading from "../utilities/SubHeading";
import { FaCode } from "react-icons/fa6";
import "./../styles/service-card.css";

export default function ServiceCard({ title, desc, color }) {
  return (
    <div
      className={`${color} bg-white rounded-md shadow-lg p-7 pb-10 flex flex-col justify-center items-start gap-6 flex-shrink basis-[350px] relative overflow-hidden service-card`}
    >
      <figure className="rounded-full p-5 text-4xl">
        <FaCode />
      </figure>
      <SubHeading>{title}</SubHeading>
      <Line width="30%" color={color} />
      <Para size="16px">{desc}</Para>
    </div>
  );
}
