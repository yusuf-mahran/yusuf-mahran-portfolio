export default function SubHeading({ children, size }) {
  return (
    <h3
      style={{ fontSize: size }}
      className={`${size ? `text-[${size}]` : "text-3xl"}`}
    >
      {children}
    </h3>
  );
}
