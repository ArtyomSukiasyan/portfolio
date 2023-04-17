import { IContainerProps } from "../../../models/containerProps";

export default function Container({
  className = "",
  children,
}: IContainerProps) {
  return <div className={`${className} container`}>{children}</div>;
}
