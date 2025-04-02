export function Title({ text, children, className = "" }) {
  return (
    <h2
      className={`text-3xl lg:text-4xl font-bold lg:mb-10 text-center w-full ${className}`}
    >
      <span className="inline-block whitespace-nowrap">{text}</span>
      {children}
    </h2>
  );
}
