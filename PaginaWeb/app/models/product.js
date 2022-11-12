import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  //el modelo del producto es esencial para la pagina de detalles ya que es donde se modela la estructura de los datos
  //este va en conjunto con el serializador y el adaptador de datos creados por linea de comandos
  @attr name;
  @attr category;
  @attr description;
  @attr price;
  @attr features;
  @attr colors;
}
