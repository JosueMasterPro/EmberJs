import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
//import { products } from '../data/products';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const data = await this.store.findAll('product');
    let Pro = this.store.peekAll('product');
    //const B = Pro.filter(({category}) => category === "");
    //const b3 = Pro.filter(({name}) => name.length > 20);
    const filterItems = query => {
      return Pro.filter((el) =>
        el.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    };
    const search = document.querySelector('#search');
    const boton = document.querySelector('#button');
    const texto = 'head';
    const z=filterItems('');
    console.log(z);
    return z;
  }
  @action
  search(dir){
    console.log(dir);
  }
}
