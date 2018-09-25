export interface IProduct {
  id: string;
  path: string;
  linkText: string;
  title: string;
  subtitle: string;
  journeys: Object;
}

export interface IProducts {
  [key: string]: IProduct;
}
