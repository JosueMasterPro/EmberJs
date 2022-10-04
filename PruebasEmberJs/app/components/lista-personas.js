import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ListaPersonasComponent extends Component {
  @action
  showPerson(personas) {
    alert(`Su Nombre es ${personas}!`);
  }
}