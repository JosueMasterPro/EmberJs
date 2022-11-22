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
        //Funcion para mostrar todos los productos en el index.hbs
    get Product(){         
        return this.datos;
    }
    //Funcion que se ejecuta al cargar la pagina 1 vez
    num=1
    @action
    cargar(){
        if(this.num == 1){
            //poner los botones segun la cantidad de productos que tengamos
            const lastindex = this.datos.length - 1;
            const Pagina = [];
            if(lastindex < 6 ){
                for(var x = 0; x <= lastindex ;x++){
                    Pagina[x] = this.datos[x];
                };
            }
            else{
                for(var x = 0; x < 6;x++){
                    Pagina[x] = this.datos[x];
                };
            }
            this.datos = Pagina;
            document.getElementById('page1').classList.remove('d-none');
            document.getElementById('page1').classList.add('active');
            document.getElementById('page2').classList.remove('active');
            document.getElementById('page3').classList.remove('active');
            this.page1 = 1;
            if(lastindex < 6){
                document.getElementById('page1').classList.remove('d-none');
            }
            else if( lastindex > 6 && lastindex < 12){
                document.getElementById('page1').classList.remove('d-none');
                document.getElementById('page2').classList.remove('d-none');
            }
            else if( lastindex > 2 && lastindex < 18){
                document.getElementById('page1').classList.remove('d-none');
                document.getElementById('page2').classList.remove('d-none');
                document.getElementById('page3').classList.remove('d-none');

            }
            else if( lastindex > 18 && lastindex < 24){
                document.getElementById('page1').classList.remove('d-none');
                document.getElementById('page2').classList.remove('d-none');
                document.getElementById('page3').classList.remove('d-none');
                document.getElementById('page4').classList.remove('d-none');
            }
            
            this.num=0;
            console.log('hola')
        }
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
        this.cargar(1);
    }
    
    page1 = 0;
    page2 = 0;
    page3 = 0;
    page4 = 0;
    @action
    pag1(){ 
        this.ComboBox();
        if(this.page1 == 0){
            const lastindex = this.datos.length - 1;
            const Pagina = [];
            if(lastindex < 6 ){
                for(var x = 0; x <= lastindex ;x++){
                    Pagina[x] = this.datos[x];
                };
            }
            else{
                for(var x = 0; x < 6;x++){
                    Pagina[x] = this.datos[x];
                };
            }
            this.datos = Pagina;
            document.getElementById('page1').classList.remove('d-none');
            document.getElementById('page1').classList.add('active');
            document.getElementById('page2').classList.remove('active');
            document.getElementById('page3').classList.remove('active');
            document.getElementById('page4').classList.remove('active');
            this.page1 = 1;
            this.page2 = 0;
            this.page3 = 0;
            this.page4 = 0;
        }
        
    }

    @action
    pag2(){
        this.ComboBox();
        if(this.page2 == 0){
            const lastindex = this.datos.length - 1;
            const Pagina = [];
            if(lastindex > 5 && lastindex < 12){
                for(var x = 6; x <= lastindex ;x++){
                    Pagina[x-6] = this.datos[x];
                };
            }
            else{
                for(var x = 6; x < 12;x++){
                    Pagina[x-6] = this.datos[x];
                };
            }
            this.datos = Pagina;
            document.getElementById('page2').classList.remove('d-none');
            document.getElementById('page2').classList.add('active');
            document.getElementById('page1').classList.remove('active');
            document.getElementById('page3').classList.remove('active');
            document.getElementById('page4').classList.remove('active');
            this.page1 = 0;
            this.page2 = 1;
            this.page3 = 0;
            this.page4 = 0;
        }
    }
    @action
    pag3(){
        this.ComboBox();
        if(this.page3 == 0){
            const lastindex = this.datos.length - 1;
            const Pagina = [];
            if(lastindex > 11 && lastindex <= 18){
                for(var x = 12; x <= lastindex ;x++){
                    Pagina[x-12] = this.datos[x];
                };
            }
            else{
                for(var x = 12; x <= 17;x++){
                    Pagina[x-12] = this.datos[x];
                };
            }
            this.datos = Pagina;
            document.getElementById('page3').classList.remove('d-none');
            document.getElementById('page3').classList.add('active');
            document.getElementById('page1').classList.remove('active');
            document.getElementById('page2').classList.remove('active');
            document.getElementById('page4').classList.remove('active');
            this.page1 = 0;
            this.page2 = 0;
            this.page3 = 1;
            this.page4 = 0;
        }
    }
    @action
    pag4(){
        this.ComboBox();
        if(this.page3 == 0){
            const lastindex = this.datos.length - 1;
            const Pagina = [];
            if(lastindex > 18 && lastindex <= 24){
                for(var x = 18; x <= lastindex ;x++){
                    Pagina[x-18] = this.datos[x];
                };
            }
            else{
                for(var x = 18; x <= 23;x++){
                    Pagina[x-18] = this.datos[x];
                };
            }
            this.datos = Pagina;
            document.getElementById('page4').classList.remove('d-none');
            document.getElementById('page4').classList.add('active');
            document.getElementById('page1').classList.remove('active');
            document.getElementById('page2').classList.remove('active');
            document.getElementById('page3').classList.remove('active');
            this.page1 = 0;
            this.page2 = 0;
            this.page3 = 0;
            this.page4 = 1;
        }
    }


}
