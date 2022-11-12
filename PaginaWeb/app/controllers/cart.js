import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
//importamos el servicio
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CartController extends Controller {
  //sirve para importar el servicio
  @service('shopping-cart') cart;
  @tracked lista = '';
  cod = '';

  //calcula el subtotal incluyendo la multiplicacion de la cantidad de items
  get subtotal() {
    return this.lista.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }
  //calcula los impuestos al 15% automaticamente
  get tax() {
    return 0.15 * this.subtotal;
  }
  //calcula el total sumando el subtotal y los impuestos
  get total() {
    return this.subtotal + this.tax;
  }
  // esta funcion sirve para cuando no hay items recargar la lista y la muestre vacia
  get Items() {
    this.lista = this.cart.itemList;
    return this.lista;
  }
  cod = document.getElementById('input1');
  Suma = 1;
  //accion que permite actualizar la lista de items
  //tiene que ser mayor que 0 de lo contrario que nos muestre 0
  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count >= 0) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }
  //accion que suma los items de la lista
  @action
  ItemCount(item, event) {
    this.cod = document.getElementById('input-' + item.name + '-' + item.color);
    if (this.cod.value >= 0) {
      item.count = parseFloat(this.cod.value) + parseFloat(this.Suma);
    } else {
      item.count = 0;
    }
  }
  //accion que resta los items de la lista
  @action
  ItemCountless(item, event) {
    this.cod = document.getElementById('input-' + item.name + '-' + item.color);
    if (this.cod.value >= 1) {
      item.count = parseFloat(this.cod.value) - parseFloat(this.Suma);
    } else {
      item.count = 0;
    }
  }
  //remueve los items recargardo el subtotal y items(la funcion)
  @action
  removeFromCart(item, event) {
    this.cart.RemoveItem({
      name: item.name,
      color: item.color,
    });
    this.Items;
    this.subtotal;
  }
}
