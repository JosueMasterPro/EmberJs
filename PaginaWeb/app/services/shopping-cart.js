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
  RemoveItem(item) {
    var x = 0
    for(x; x < this.itemList.length;x++){
      if(this.itemList[x].name === item.name){
        if(this.itemList[x].color === item.color){
          return this.itemList.splice(x,1);
        }
      }
    }
  }
}
