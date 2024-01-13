import Image from "next/image";
import { IImgProps } from "../../../models/imgProps";
import styles from "./Img.module.css";

export default function Img({
  width,
  height,
  src,
  alt = "",
  className = "",
  priority = false,
}: IImgProps) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        priority={priority}
      />
    </div>
  );
}
