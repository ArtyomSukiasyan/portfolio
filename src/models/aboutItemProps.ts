export interface IAboutList {
  title: string;
  role: string;
  date: string;
  type?: string;
  country?: string;
}

export interface IAboutItemProps {
  type: string;
  list: IAboutList[];
  className: string;
}
