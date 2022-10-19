import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    @service store;

    Pro1 = this.store.peekAll('product');
    @tracked datos=this.Pro1;
    filterItems = (query) => {
        return this.Pro1.filter(
          (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    };
    search = '';
    search = document.querySelector('#search');

    get Product(){
        this.datos = this.filterItems(search.value);
        return this.datos;
    }

    @action
    filter() {
        
        console.log(search.value);
        console.log(this.Product);
        this.Product;
    }

}
