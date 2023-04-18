import * as React from "react";
const SvgGlass = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="glass_svg__w-6 glass_svg__h-6"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774zM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </svg>
);
export default SvgGlass;