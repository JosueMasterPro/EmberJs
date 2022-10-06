import Route from '@ember/routing/route';

export default class AnimalesRoute extends Route {
    prueba(){
        return ['Juan', 'Pedro','Perez', 'Pablo','wifi'];
    }
    model() {
        return ['Halley', 'Merlin','Fran', 'josue','wifi'];
    };
  
}

