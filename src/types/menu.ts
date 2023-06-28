export interface Menu {
  id: number;
  title: string;
  link: string;
}

export enum RoutesLinks {
  COMING = '/coming/',
  GROUPS = '/groups/',
  PRODUCTS = '/products/',
  USERS = '/users/',
  SETTINGS = '/settings/',
}
