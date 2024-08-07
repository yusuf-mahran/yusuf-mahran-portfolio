import { CgMenuLeftAlt } from "react-icons/cg";

export default function MenuBtn({ handleClick }) {
  return (
    <button
      className="md:hidden block p-1 rounded-lg text-xl"
      onClick={handleClick}
    >
      <CgMenuLeftAlt className="text-4xl font-extrabold rotate-180" />
    </button>
  );
}
