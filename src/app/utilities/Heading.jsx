export default function Heading({ children }) {
  return (
    <h2 className="text-4xl relative after:absolute after:top-full after:left-0 after:translate-y-2 after:w-4/5 after:h-1 after:rounded-r-full bg-light-skyblue-after">
      {children}
    </h2>
  );
}
