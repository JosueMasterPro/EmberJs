import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
//import { products } from '../data/products';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const data = await this.store.findAll('product');

  }
}
