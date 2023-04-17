export interface IAboutList {
  title: string;
  role: string;
  date: string;
}

export interface IAboutItemProps {
  type: string;
  list: IAboutList[];
  className: string;
}
