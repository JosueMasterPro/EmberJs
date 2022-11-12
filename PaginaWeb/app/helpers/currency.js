/* eslint-disable prettier/prettier */
import Helper from '@ember/component/helper';

export default class currency extends Helper {
  //ayudante personalizado especificamente para dar formato a los montos
  //asi como el simbolo ya que si la tienda utilizara lempiras en vez del dolar solo lo cambiamos aqui
  //y automaticamente lo hace en todos los montos
  compute(params, hash = {}) {
    // {{currency 25}}
    const [number] = params;
    const { sign = '$' } = hash;
    const dollars = Math.floor(number);
    let cents = Math.floor((number * 100) % 100);

    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }

    return `${sign}${dollars}.${cents}`;
  }
}
