import Para from "./Para";
import "./../styles/beautiful-message.css";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdSmsFailed } from "react-icons/md";

export default function BeautifulMessage({ status, message }) {
  return (
    <Para
      color={`beautiful-message bg-white shadow-lg ${
        status === 201 ? "border-green-500" : "border-red-500"
      }`}
    >
      {status === 201 ? (
        <RiVerifiedBadgeFill className="text-green-600 inline-block w-5 h-5 drop-shadow-lg" />
      ) : (
        <MdSmsFailed className="text-red-500 inline-block w-5 h-5 drop-shadow-lg" />
      )}
      <span className="w-full leading-5">{message}</span>
      <span className="w-full h-2 absolute bottom-0 left-0"></span>
    </Para>
  );
}
