import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
//import { products } from '../data/products';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const data = await this.store.findAll('product');
    let Pro = this.store.peekAll('product');
    const filterItems = (query) => {
      return Pro.filter(
        (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    };
    
    const z = filterItems('');
    //console.log(z);
    return z;
  }
}
