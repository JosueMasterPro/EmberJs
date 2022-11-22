import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
//importamos los datos del archivo productos
//en la carpeta data cambiamos el metodo para simular la respuesta del backend
//import { products } from '../data/products';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service store;
  //creamos el modelo y retornamos los productos
  //cuando cambiamos a la api cambiams el modelo a async para que funcione el await correctamente
  async model() {
    // funcion de busqueda en el archivo json
    //await es para que las promesas que devuelve una api se puedan solicitar de forma
    //asincrona pero leer y estructurarse de forma sincrona
    const data = await this.store.findAll('product');
  }
}
