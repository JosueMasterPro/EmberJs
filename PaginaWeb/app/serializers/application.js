import RESTSerializer from '@ember-data/serializer/rest';
//Segun la documentacion, aqui adentro podriamos evitar que pasen ciertos parametros del json,
//o incluso poder modificar algun valor para que no se vea en la parte frontal.
//esto segun la documentacion, nosotros no ocupamos nada de eso
export default class ApplicationSerializer extends RESTSerializer {}
