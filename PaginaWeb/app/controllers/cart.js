import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  cod = '';
  remove="";
  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return 0.15 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  } 

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    console.log(count);
    if (count >= 0) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }

  cod = document.getElementById("input1");
  remove = document.getElementById("i");
  Suma = 1;
  @action
  ItemCount(item, event) {
    this.cod = document.getElementById("input-" + item.name + "-"+item.color);
    console.log(item.name);
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
  /*
  @action 
  removeToCart(item, event) {
    this.remove = document.getElementById(("delete-" + item.name + "-"+item.color));
    name=item.name;
    this.cart.addItem({
      name,
      category,
      color,
      image: colors.find((colorInfo) => colorInfo.color === color).image,
      price: price.current,
    });
  }*/

}
