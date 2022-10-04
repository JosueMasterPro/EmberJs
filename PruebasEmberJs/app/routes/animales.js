import Route from '@ember/routing/route';

export default class AnimalesRoute extends Route {
  model() {
    return ['Halley', 'Merlin','Fran', 'josue','wifi'];
  }
}
