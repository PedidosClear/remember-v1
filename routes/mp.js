// import express from 'express'
const express = require('express');
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
            body.items.forEach((p) =>{
        preference.items.push({
            id: p.uid,
            description: p.talle != undefined ? 'Talle: ' + p.talle + '\nModelo: ' + p.modelo : '',
            picture_url:'https://firebasestorage.googleapis.com/v0/b/remember-2816a.appspot.com/o/logo.png?alt=media&token=22b8dbe0-ce0b-4fdf-962f-a2e7ebb25912',
            title: 'Productos Remembers',
            unit_price: p.precio,
            quantity: 1
        })
      });

      preference.back_urls = {
        "success": "https://remember-app.herokuapp.com/",
        "failure": "https://remember-app.herokuapp.com/failure",
        "pending": "https://remember-app.herokuapp.com/pending"
    };

      preference.payer = {
        "name": body.payer.nombre,
        "phone": {
            "area_code": body.payer.areaTelefono,
            "number": parseInt(body.payer.telefono)
        },
        "address": {
            "street_name": body.payer.direccion ? body.payer.direccion : '',
            // "street_number": 150,
            "zip_code": body.payer.codPostal ? body.payer.codPostal.CodPostal.toString() : ''
        }
    },

    preference.payment_methods = {
      excluded_payment_types: [
        {"id":"ticket"},
        {"id":"atm"}
      ]
    }

      // let todaynow = new Date();
      // let dia = todaynow.getDate() < 10 ? '0'+todaynow.getDate() : todaynow.getDate().toString();
      // let mes = todaynow.getMonth()+1 < 10 ? '0'+(todaynow.getMonth()+1) : (todaynow.getMonth()+1).toString();
      // let anio = todaynow.getFullYear() < 10 ? '0'+todaynow.getFullYear() : todaynow.getFullYear().toString();
      // let hora = todaynow.getHours() < 10 ? '0'+todaynow.getHours() : todaynow.getHours().toString();
      // let min = todaynow.getUTCMinutes() < 10 ? '0'+todaynow.getUTCMinutes() : todaynow.getUTCMinutes().toString();
      // let seg = todaynow.getSeconds() < 10 ? '0'+todaynow.getSeconds() : todaynow.getSeconds().toString();
      // let mseg = todaynow.getMilliseconds() < 10 ? '0'+todaynow.getMilliseconds() : todaynow.getMilliseconds().toString();

      // let external_reference = dia+mes+anio+hora+min+seg+mseg

      // preference.external_reference = external_reference
      preference.notification_url = "https://remember-app.herokuapp.com/api/notifications"
      // preference.auto_return ="approved";
      // console.log(preference);

      var respuesta = "HOLA"

      mercadopago.preferences.create(preference)
      .then(function(response){
      // Este valor reemplazará el string "$$init_point$$" en tu HTML
        respuesta = response.body.init_point;
        // console.log(respuesta);
        global.init_point = response.body.init_point;
        res.status(200).json(response.body)
      }).catch(function(error){
        console.log('E-'+ error);
      });
})

router.post('/notifications', async(req, res)=>{
  
  const bodyIpn = req.body;
  // console.log(bodyIpn.type);
  if(bodyIpn.type != null){
    var type = bodyIpn.type
    var id = bodyIpn.data.id
    if(type == "payment"){
      mercadopago.payment.get(id).then(function (data) {
        return data.body
      }).then(function (dataPayment) {
        // console.log('dataPayment');
        mercadopago.merchant_orders.get(dataPayment.order.id).then(function (data) {
          // console.log('dataOrders');
          var dataOrders = data.body
          // console.log(dataOrders);
          // console.log('-------------------------------------------------------------------------------------');
          // console.log(dataOrders.payer);

          mercadopago.preferences.get(dataOrders.preference_id).then(data => {

            var dataPreference = data.body
            
            db.collection("ventas").doc(dataPayment.id.toString()).set({
              "payerPayment" : dataPayment.payer,
              "transaction_details" : dataPayment.transaction_details,
              "IdOrden" : dataOrders.id,
              "items" : dataOrders.items,
              "shipments" : dataOrders.shipments,
              "order_status" : dataOrders.order_status,
              "collector" : dataOrders.collector,
              "payments" : dataOrders.payments,
              "cancelled" : dataOrders.cancelled,
              'payer' : dataPreference.payer
            }).then(()=>{
              console.log("Document successfully written!");
              res.status(200).json('OK-Guardado')
            }).catch(function(error) {
              console.log("Error writing document: ", error);
              res.status(200).json('Error-Guardado')
            })

          })

        })
        .catch(function (error) {
          // console.log('Error merchant_orders')
          res.status(200).json({'error': error})
        });
      })
      .catch(function (error) {
        // console.log('Error Aca payment')
        res.status(200).json({'error': error})
      });
    } else {
      // db.collection("datoELSE").add(bodyIpn.type)
      // db.collection("datoELSE").add(bodyIpn.data.id)
      res.status(200).json('Distinto a Payment')
    }
  } else {
    res.status(200).json('No Guardar')
    // db.collection("noEntro").add(bodyIpn)
  }
})

  // exportar de router
  module.exports = router;