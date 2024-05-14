import { StaticImageData } from "next/image";

export interface IImgProps {
  src: StaticImageData;
  alt?: string;
  className?: string;
  priority?: boolean;
}
