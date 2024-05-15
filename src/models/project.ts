import { StaticImageData } from "next/image";

export interface IProject {
  title: string;
  text: string;
  image: StaticImageData;
  roles: string[];
  href: string;
  githubLink?: string;
}
