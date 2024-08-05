export default function SubHeading({ children, size, align }) {
  return (
    <h3
      style={{ fontSize: size }}
      className={`${size ? `text-[${size}]` : "text-3xl"} ${
        align ? `text-${align}` : ""
      }`}
    >
      {children}
    </h3>
  );
}
