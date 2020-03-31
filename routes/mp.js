import express from 'express'
const router = express.Router()

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credencialesy
mercadopago.configure({
    access_token: 'TEST-8827071824006547-012722-cb470c99449c0778790570a89b985dac-74287929'
  });

  // Crea un objeto de preferencia
// let preference = {
//     items: [
//       {
//         title: 'Mi producto',
//         unit_price: 100,
//         quantity: 1,
//       }
//     ]
//   };

  
  router.post('/mp', async(req, res)=>{
      // console.log(req);
      const body = req.body;
      let preference = {
        items: []
      };
      body.forEach((p) =>{
        preference.items.push({
            title: p.nombre,
            unit_price: p.precio,
            quantity: 1
        })
      });

      preference.back_urls = {
        "success": "http://192.168.0.70:3000/success",
        "failure": "http://192.168.0.70:3000/failure",
        "pending": "http://192.168.0.70:3000/pending"
    };
    preference.notification_url = "https://app-remember-mm.herokuapp.com/api/notifications"
    // preference.auto_return ="approved";
    console.log(preference);

      var respuesta = "HOLA"

          mercadopago.preferences.create(preference)
          .then(function(response){
          // Este valor reemplazará el string "$$init_point$$" en tu HTML
            respuesta = response.body.init_point;

            global.init_point = response.body.init_point;
            // console.log(global.init_point);
            // console.log('1'+ response.body.init_point);
            // console.log('2'+ respuesta.toString());

            // console.log('3'+ response.body.init_point);
            // res.status(200).json(response)
            res.status(200).json(global.init_point)
          }).catch(function(error){
            console.log('E-'+ error);
          });
})

router.get('/notifications', async(req, res)=>{
  // console.log(req);
  const body = req.body;
  // res.send(body)
  console.log('body '+ body);

  res.status(200).json('')

})


  // exportar de router
  module.exports = router;