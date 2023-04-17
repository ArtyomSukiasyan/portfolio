import React from "react";

const Icon = ({ path }: { path: string }): JSX.Element => {
  return (
    <svg viewBox="0 0 496 512" width={24} height={24} fill="white">
      <path d={path} />
    </svg>
  );
};

export default Icon;
