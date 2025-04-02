export function Section({ children, className = "" }) {
  return (
    <section
      className={` w-full mx-auto px-4 sm:px-6 lg:px-8 
      max-w-screen-sm  md:max-w-[85%] lg:max-w-[1260px] 2xl:max-w-[1400px]
      ${className}`}
    >
      {children}
    </section>
  );
}
