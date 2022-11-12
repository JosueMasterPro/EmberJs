import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PaymentController extends Controller {
    //importamos el servicio del carrito de compras
    @service('shopping-cart') cart;

    //se reutilizan las funciones para los calculos del subtotal, impuesto y total
    get subtotal() {
        return this.cart.itemList.reduce((acc, item) => {
          return acc + item.price * item.count;
        }, 0);
    }
    get tax() {
        return 0.15 * this.subtotal;
    }
    
    get total() {
        return this.subtotal + this.tax;
    }
    
    //acciones que nos permite cambiar la clases para los metodos de pago asi cambian por paypal o por tarjeta
    @action
    Metodo1(){
        document.getElementById('tarjeta').classList.add('active');
        document.getElementById('paypal').classList.remove('active');
        document.getElementById('tarjeta-pago').classList.add('show','active','m-3');
        document.getElementById('paypal-pago').classList.remove('show','active','m-3');
        
    }
    @action
    Metodo2(){
        document.getElementById('tarjeta').classList.remove('active');
        document.getElementById('paypal').classList.add('active');
        document.getElementById('tarjeta-pago').classList.remove('show','active','m-3');
        document.getElementById('paypal-pago').classList.add('show','active','m-3');
        
    }
}
