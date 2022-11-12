import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductDetailsComponent extends Component {
  //siempre inyectamos el servicio del carrito de compras
  @service('shopping-cart') cart;

  //   creamos la accion para agregar al carrito usando la funcion de agregar item
  @action
  addToCart() {
    const { name, category, color, colors, price } = this.args;
    this.cart.addItem({
      name,
      category,
      color,
      image: colors.find((colorInfo) => colorInfo.color === color).image,
      price: price.current,
    });
  }
}
