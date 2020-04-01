import express from 'express'
const router = express.Router()

// const db = require('../firebase')

var admin = require("firebase-admin");
var serviceAccount = require("../remember-2816a-firebase-adminsdk-gmflf-600c203178.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  // ,  databaseURL: "https://remember-2816a.firebaseio.com"
});

const db = admin.firestore();

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credencialesy
mercadopago.configure({
    access_token: 'APP_USR-987669859953011-033118-79a18a1fdff66318c73e6a65bbe524c1-539610834'
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
        "success": "https://app-remember-mm.herokuapp.com/success",
        "failure": "https://app-remember-mm.herokuapp.com/failure",
        "pending": "https://app-remember-mm.herokuapp.com/pending"
    };
      preference.shipments = {
        "mode": "me2",
        "local_pickup": true,
        "dimensions": "30x30x30,500"
      }
      let todaynow = new Date();
      let dia = todaynow.getDate() < 10 ? '0'+todaynow.getDate() : todaynow.getDate().toString();
      let mes = todaynow.getMonth()+1 < 10 ? '0'+(todaynow.getMonth()+1) : (todaynow.getMonth()+1).toString();
      let anio = todaynow.getFullYear() < 10 ? '0'+todaynow.getFullYear() : todaynow.getFullYear().toString();
      let hora = todaynow.getHours() < 10 ? '0'+todaynow.getHours() : todaynow.getHours().toString();
      let min = todaynow.getUTCMinutes() < 10 ? '0'+todaynow.getUTCMinutes() : todaynow.getUTCMinutes().toString();
      let seg = todaynow.getSeconds() < 10 ? '0'+todaynow.getSeconds() : todaynow.getSeconds().toString();
      let mseg = todaynow.getMilliseconds() < 10 ? '0'+todaynow.getMilliseconds() : todaynow.getMilliseconds().toString();

      let external_reference = dia+mes+anio+hora+min+seg+mseg

      preference.external_reference = external_reference
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
        res.status(200).json(response.body)
      }).catch(function(error){
        console.log('E-'+ error);
      });
})

router.post('/notifications', async(req, res)=>{
  // console.log(req);
  const body = req.body;
  // res.send(body)
  console.log(body);

  db.collection("test").add({
    name: "Tokyo2",
    country: "Japan2"
  })
  db.collection("notifications").add(body)

  res.status(200).json('')

})

router.get('/test', async(req, res)=>{
  // console.log(req);
  const body = req.body;
  // res.send(body)
  console.log('body '+ body);

  db.collection("test").add({
    name: "Tokyo",
    country: "Japan"
  })

  res.status(200).json('')

})


  // exportar de router
  module.exports = router;