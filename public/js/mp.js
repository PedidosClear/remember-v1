// SDK de Mercado Pago
import { configure, preferences } from '@/mercadopago';

// Agrega credenciales
configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = response.body.init_point;
}).catch(function(error){
  console.log(error);
});