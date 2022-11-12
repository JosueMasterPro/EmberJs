import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  //siempre importamos el servicio del carrito para poder usar la lista de items
  @service shoppingCart;

  //con este metodo si se agregan 2 o mas del mismo producto muestra la suma(cuenta) correcta en el carrito
  get itemCount() {
    return this.shoppingCart.itemList.reduce((total, item) => {
      return (total += item.count);
    }, 0);
  }
}
