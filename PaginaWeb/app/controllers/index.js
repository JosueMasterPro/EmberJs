/* eslint-disable prettier/prettier */
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    //este servicio hace referencia a la api que en este caso es el almacen
    @service store;

    //para recuperar todos los registros de un tipo determinado que ya están cargados en la tienda, sin realizar una solicitud de red
    Pro1 = this.store.peekAll('product');
    //el tracked sirve para traer los valores actalizados que se ingresan al input de busqueda
    @tracked datos=this.Pro1;
    @tracked Filtros = this.Pro1;
    search = '';
    cod = '';

    //este filtra por nombre que se escribe e el input
    filterItemsbyName = (Data,query) => {
        return Data.filter(
          (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    };
    //este filtra por categoria que se selecciona al lado
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
    //accion que nos permite filtrar por categoria y traer la lista de items que pertenezcan a la misma
    @action
    ComboBox() {
        this.cod = document.getElementById("category");
        this.datos = this.Pro1;
        this.Filtros = this.Pro1;
        if(this.cod.value == 0 || this.cod.value == 1){
            this.Filtros = this.filterItemsbyCategory(this.datos,'');
            this.datos = this.filterItemsbyName(this.Filtros,search.value);
        }
        else{
            this.Filtros = this.filterItemsbyCategory(this.datos,this.cod.value);
            this.datos = this.filterItemsbyName(this.Filtros,search.value);
        }
    }

}
