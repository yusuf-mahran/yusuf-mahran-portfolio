export default function Para({ children, size, color, indent }) {
  return (
    <p
      className={`${size ? `text-[size]` : "text-xl"} ${
        color ? color : "color-dark-gray"
      } ${indent && "indent-7"} w-full`}
    >
      {children}
    </p>
  );
}
