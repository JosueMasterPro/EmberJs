import Component from '@glimmer/component';

export default class ProductComponent extends Component {
  //definimos la variable como el argumento que viene
  //recibido del each de index.hbs
  productImage = this.args.product.colors[0].image;
}
