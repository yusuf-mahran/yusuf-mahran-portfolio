import Link from "next/link";

export default function Btn({ children, href, color, target, handleClick }) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          target={target}
          className={`${color} btn flex justify-center items-center gap-3`}
        >
          {children}
        </Link>
      ) : (
        <button
          style={{ background: color === "bg-transparent" && "transparent" }}
          onClick={handleClick}
          className={`${color} btn flex justify-center items-center gap-3`}
        >
          {children}
        </button>
      )}
    </>
  );
}
