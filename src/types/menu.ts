export interface Menu {
  id: number;
  title: string;
  link: string;
}

export enum RoutesLinks {
  COMING = '/pages/coming/',
  GROUPS = '/pages/groups/',
  PRODUCTS = '/pages/products/',
  USERS = '/pages/users/',
  SETTINGS = '/settings/',
}
