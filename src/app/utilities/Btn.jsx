import Link from "next/link";

export default function Btn({ children, href }) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className="btn flex justify-center items-center gap-3"
        >
          {children}
        </Link>
      ) : (
        <button className="btn flex justify-center items-center gap-3">
          {children}
        </button>
      )}
    </>
  );
}
