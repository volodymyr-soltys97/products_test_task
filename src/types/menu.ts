export interface Menu {
  id: number;
  title: string;
  link: string;
}

export enum Routes {
  COMING = '/coming/',
  GROUPS = '/groups/',
  PRODUCTS = '/products/',
  USERS = '/users/',
  SETTINGS = '/settings/',
}
