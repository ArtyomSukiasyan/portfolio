import { IButtonProps } from "../../../models/buttonProps";

export default function Button({ href, className, text }: IButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={`btn ${className}`}
      rel="noreferrer"
    >
      {text}
    </a>
  );
}
