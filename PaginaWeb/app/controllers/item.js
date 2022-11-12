/* eslint-disable prettier/prettier */
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  //usamos los parametros que se encuentran en el model
  //y traemos los colores mas recientes para cuando el
  //usuario le de clic
  @tracked color = this.model.colors[0].color;

  @tracked isZoomed = false;

  //obtenemos la imagen de los productos comparando
  //si el color es el negro o rojo para traer la imagen
  get productImage() {
    return this.model.colors.find(({ color }) => color === this.color).image;
  }

  //aqui se define la accion para cambiar el color
  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }

  //accion del zoom cambiando el estado de verdadero a falso
  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
