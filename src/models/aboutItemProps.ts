export interface IAboutList {
  title: string;
  role: string;
  date: string;
  link?: string;
  type?: string;
}

export interface IAboutItemProps {
  type: string;
  list: IAboutList[];
  className: string;
}
