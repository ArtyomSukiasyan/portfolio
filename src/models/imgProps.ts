import type { StaticImageData } from "next/image";

export interface IImgProps {
  src: StaticImageData;
  alt?: string;
  className?: string;
  priority?: boolean;
}
