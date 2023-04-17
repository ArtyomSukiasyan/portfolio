import Image from "next/image";
import styles from "./Img.module.css";

export default function Img({
  width,
  height,
  src,
  alt = "",
  className = "",
}: any) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Image width={width} height={height} src={src} alt={alt} />
    </div>
  );
}
