import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CartController extends Controller {
  @service('shopping-cart') cart;
  @tracked lista = '';
  cod = '';
  get subtotal() { 
    return this.lista.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return 0.15 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  } 
  get Items(){
    this.lista = this.cart.itemList;
    return this.lista
  }
  cod = document.getElementById("input1");
  Suma=1;
  @action
  updateItemCount(item, event) {
    const count = event.target.value;

    if (count >= 0) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }
  @action
  ItemCount(item, event) {
    this.cod = document.getElementById("input-" + item.name + "-"+item.color);
    if (this.cod.value >= 0) {
      item.count = parseFloat(this.cod.value) + parseFloat(this.Suma)
    } else {
      item.count = 0;
    }
  }
  @action
  ItemCountless(item, event) {
    this.cod = document.getElementById("input-" + item.name + "-"+item.color);
    if (this.cod.value >= 1) {
      item.count = parseFloat(this.cod.value) - parseFloat(this.Suma)
    } else {
      item.count = 0;
    }
  }
  @action 
  removeFromCart(item,event){
    this.cart.RemoveItem({
      name: item.name,
      color: item.color,
    });
    this.Items;
    this.subtotal
  }
}
