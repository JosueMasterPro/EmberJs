import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 0 }, { price: 0 }];
    return items;
  }
}
