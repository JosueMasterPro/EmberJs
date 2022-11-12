import Route from '@ember/routing/route';
//se traen los datos de products en la carpeta data
//el cual contiene todos los datos de los items
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service store;

  //creamos un modelo para poder usar las rutas dinamicas
  async model(params) {
    const { item_id } = params;
    const data = await this.store.findAll('product');
    const product = data.find(({ id }) => id === item_id);
    return product;
  }

  //codigo necesario para que funcione el cambio de color
  //ya nos tiro error cuando cambiamos con helpers
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}
