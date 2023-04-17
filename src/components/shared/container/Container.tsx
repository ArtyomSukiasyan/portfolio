import React from "react";

export default function Container({
  className = "",
  children,
}: {
  className: string;
  children: JSX.Element | JSX.Element[];
}) {
  return <div className={`${className} container`}>{children}</div>;
}
