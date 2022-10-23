import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    @service store;

    Pro1 = this.store.peekAll('product');
    @tracked datos=this.Pro1;
    @tracked Filtros = this.Pro1;
    search = '';
    cod = '';

    filterItemsbyName = (Data,query) => {
        return Data.filter(
          (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    };
    filterItemsbyCategory = (Data,query) => {
        return Data.filter(
          (el) => el.category.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    };
        search = document.querySelector('#search');
        cod = document.getElementById("category");
        
    get Product(){ 
        return this.datos;
    }

    @action
    filter() {
        this.ComboBox();

    }
    @action
    ComboBox() { 
        this.cod = document.getElementById("category");
        this.datos = this.Pro1;
        this.Filtros = this.Pro1;
        if(this.cod.value == 0){
            this.Filtros = this.filterItemsbyCategory(this.datos,'');
            this.datos = this.filterItemsbyName(this.Filtros,search.value);
        }
        else{
            this.Filtros = this.filterItemsbyCategory(this.datos,this.cod.value);
            this.datos = this.filterItemsbyName(this.Filtros,search.value);
        }
    }

}
