import React from "react";

export function Button({ text, color = "black", href = "#" }) {
  const colorClasses = {
    black:
      "mt-4 md:mt-6 bg-black text-white rounded-full font-medium shadow-md transition-transform duration-300 px-5 lg:px-4 py-3 lg:py-2",
    white:
      "mt-4 md:mt-6 bg-white text-black rounded-full font-medium shadow-md transition-transform duration-300 px-4 lg:px-4 py-2 lg:py-2",
    green:
      "mt-4 md:mt-6 bg-[#29BF12] text-white rounded-full font-medium shadow-md transition-transform duration-300 px-4 lg:px-4 py-2 lg:py-2",
  };

  const classes = colorClasses[color] || colorClasses.black;

  return (
    <a href={href} className={`inline-block ${classes} hover:scale-105`}>
      {text}
    </a>
  );
}
