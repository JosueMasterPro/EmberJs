/* eslint-disable prettier/prettier */
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;

  name;
  category;
  color;
  image;
  price;

  constructor(item) {
    this.count = item.count;
    this.name = item.name;
    this.category = item.category;
    this.color = item.color;
    this.image = item.image;
    this.price = item.price;
  }
}
export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const existingItem = this.itemList.find(({ name, color, category }) => {
      return (
        name === item.name && color === item.color && category === item.category
      );
    });
    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1
        }),
      ];
    }
  }
  /*
  RemoveItem(item) {
    const existingItem = this.itemList.find(({ name, color, category }) => {
    ;leer mas sobre el .slice para eliminar un item, el item es el de la lista de esta pagina, todo
    esta aqui, en el cart js, solo hay que pasarle el nombre  y el color para que aqui lo busque.
    });
    if (existingItem) {
      existingItem.count -= 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1
        }),
      ];
    }
  }*/
}
