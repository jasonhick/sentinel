import { IProducts, IProduct } from '../shared/models/products.interface';
import * as Products from './products';

// CONFIG object has been defined as a new Map data type
// export const CONFIG: Map<string, any> = new Map<string, any>([
//   ['motor', Products.Motor],
//   ['home', Products.Home],
//   ['breakdown', Products.Breakdown]
// ]);

export const CONFIG: IProducts = {
  motor: {
    id: 'motor',
    path: 'motor',
    linkText: 'Car',
    title: 'Car amends',
    subtitle: 'Manage your motor policy online',
    journeys: Products.Motor
  },
  home: {
    id: 'home',
    path: 'home',
    linkText: 'Home',
    title: 'Home amends',
    subtitle: 'Manage your home policy online',
    journeys: Products.Home
  },
  breakdown: {
    id: 'breakdown',
    path: 'breakdown',
    linkText: 'Rescue',
    title: 'Rescue amends',
    subtitle: 'Manage your breakdown policy online',
    journeys: Products.Breakdown
  }
};
