export interface IAboutList {
  title: string;
  role: string;
  date: string;
  country?: string;
}

export interface IAboutItemProps {
  type: string;
  list: IAboutList[];
  className: string;
}
