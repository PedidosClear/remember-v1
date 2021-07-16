// import express from 'express'
const express = require('express');
const router = express.Router()
const fetch = require('node-fetch');
const schedule = require('node-schedule');

var dotenv = require('dotenv');
dotenv.config();

var admin = require("firebase-admin");
var serviceAccount = require("../remember-2816a-firebase-adminsdk-gmflf-600c203178.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  // ,  databaseURL: "https://remember-2816a.firebaseio.com"
});
// const firebase = require('firebase');
const db = admin.firestore();

const accountSid = 'AC60b14f2d0a6e5934e93694df61afa043'; 
const authToken = 'db114585a1d17c380504392f805114bf'; 
const client = require('twilio')(accountSid, authToken); 

var sec = []

for (let index = 0; index < 60; index=index+10) {
  sec.push(index);
  // console.log(index);
}

const rule = new schedule.RecurrenceRule();
rule.second = sec;
rule.hour = [new schedule.Range(11, 16)];
rule.dayOfWeek = [new schedule.Range(1, 5)];

const job = schedule.scheduleJob(rule, function(){
  console.log('Ejecucion! ' + new Date);
  cotizacion() 
  setTimeout(() => {
    console.log('Ejecucion! 48hs');
    cotizacion48()
  }, 5000);
})

async function cotizacion() {
  let urlencoded = new URLSearchParams();
    urlencoded.append("username", "maldo89.19@gmail.com");
    urlencoded.append("password", "M458652m");
    urlencoded.append("grant_type", "password");

    let requestOptions = {
    method: 'POST',
    // headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    let token
    let rdo = []

    let bonos = ['AL30D','AL30C','GD30D','GD30C']

    await fetch("https://api.invertironline.com/token", requestOptions)
      .then(response => response.json())
      .then(json => {

        token = json.access_token
        // console.log(token);

        var requestOptions2 = {
          method: 'GET',
          headers: { 'Authorization': 'Bearer '+token }
          };

        Promise.all(
          bonos.map(async (bono) => {

            await fetch("https://api.invertironline.com/api/v2/{Mercado}/Titulos/{Simbolo}/Cotizacion?mercado=bCBA&simbolo=bonos&model.mercado=bCBA&model.plazo=t0&model.simbolo="+bono, requestOptions2)
            .then(response => response.json())
            .then(result => {
              var b = result
              b.nombre = bono

                // console.log( bono +' '+result.ultimoPrecio)
                rdo.push(b)  
            }
            )
            .catch(error => console.log('error', error));
          })
        ).then(()=>{
          // console.log(rdo);
            // res.status(200).json(rdo)
          let ponerCero = 0
          let todaynow = new Date();
          let dia = todaynow.getDate() < 10 ? '0'+todaynow.getDate() : todaynow.getDate().toString();
          let mes = todaynow.getMonth()+1 < 10 ? '0'+(todaynow.getMonth()+1) : (todaynow.getMonth()+1).toString();
          let anio = todaynow.getFullYear() < 10 ? '0'+todaynow.getFullYear() : todaynow.getFullYear().toString();
          let file = anio+'-'+mes+'-'+dia

          let r2pCompra1 = rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].precioVenta : 0
          let r2CantidadComprada1 = Math.trunc((2000) / r2pCompra1 * 100)
          let r2fin0 = r2CantidadComprada1 *  r2pCompra1 /100
          let r2comision1 = ((r2pCompra1 * r2CantidadComprada1)/100 * (0.01) / 100)*-1
          let r2pVenta1 = rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].precioCompra : 0
          let r2fin1 = r2CantidadComprada1 *  r2pVenta1 /100
          let r2comision2 =  (r2fin1 * (0.01) / 100)*-1
          let r2pCompra2 = rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].precioVenta : 0
          let r2CantidadComprada2 = Math.trunc((r2fin1) / r2pCompra2 * 100)
          let r2fin3 = r2CantidadComprada2 * r2pCompra2 /100
          let r2comision3 = ((r2pCompra2 * r2CantidadComprada2)/100 * (0.01) / 100)*-1
          let r2pVenta2 = rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].precioCompra : 0
          let r2fin2 = r2CantidadComprada2 * r2pVenta2 /100
          let r2comision4 =  (r2fin2 * (0.01) / 100)*-1
          
          ponerCero = r2pCompra1 == 0 ? 1 : 0 + r2pVenta1 == 0 ? 1 : 0 + r2pCompra2 == 0 ? 1 : 0 + r2pVenta2 == 0 ? 1 : 0
          // console.log(ponerCero);

          let data = {
            desde:'AL30',
            hasta:'GD30',
            dif1: ponerCero != 0 ? 0 : r2pCompra1 - r2pVenta1,
            dif2: ponerCero != 0 ? 0 : r2pVenta2 - r2pCompra2,
            ratio: ponerCero != 0 ? 0 : (r2pVenta2 - r2pCompra2) - (r2pCompra1 - r2pVenta1),
            al30d_q: rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].cantidadVenta : 0,
            al30d_p: rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].precioVenta : 0,
            al30c_q: rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].cantidadCompra : 0,
            al30c_p: rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].precioCompra : 0,
            gd30c_q: rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].cantidadVenta : 0,
            gd30c_p: rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].precioVenta : 0,
            gd30d_q: rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].cantidadCompra : 0,
            gd30d_p: rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].precioCompra : 0,
            monto: ponerCero != 0 ? 0 : 2000,
            q_al30: ponerCero != 0 ? 0 : r2CantidadComprada1,
            q_gd30: ponerCero != 0 ? 0 : r2CantidadComprada2,
            restoD: ponerCero != 0 ? 0 : r2fin2 - r2fin0,
            restoC: ponerCero != 0 ? 0 : r2fin1 - r2fin3,
            comision: ponerCero != 0 ? 0 : r2comision1+r2comision2+r2comision3+r2comision4,
            dia: todaynow
          }

          let _ponerCero = 0

          let _r2pCompra1 = rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].precioVenta : 0
          let _r2CantidadComprada1 = Math.trunc((2000) / _r2pCompra1 * 100)
          let _r2fin0 = _r2CantidadComprada1 *  _r2pCompra1 /100
          let _r2comision1 = ((_r2pCompra1 * _r2CantidadComprada1)/100 * (0.01) / 100)*-1
          let _r2pVenta1 = rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].precioCompra : 0
          let _r2fin1 = _r2CantidadComprada1 *  _r2pVenta1 /100
          let _r2comision2 =  (_r2fin1 * (0.01) / 100)*-1
          let _r2pCompra2 = rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].precioVenta : 0
          let _r2CantidadComprada2 = Math.trunc((_r2fin1) / _r2pCompra2 * 100)
          let _r2fin3 = _r2CantidadComprada2 * _r2pCompra2 /100
          let _r2comision3 = ((_r2pCompra2 * _r2CantidadComprada2)/100 * (0.01) / 100)*-1
          let _r2pVenta2 = rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].precioCompra : 0
          let _r2fin2 = _r2CantidadComprada2 * _r2pVenta2 /100
          let _r2comision4 =  (_r2fin2 * (0.01) / 100)*-1
          
          _ponerCero = _r2pCompra1 == 0 ? 1 : 0 + _r2pVenta1 == 0 ? 1 : 0 + _r2pCompra2 == 0 ? 1 : 0 + _r2pVenta2 == 0 ? 1 : 0

          let data2 = {
            desde:'GD30',
            hasta:'AL30',
            dif1: _ponerCero != 0 ? 0 : _r2pCompra1 - _r2pVenta1,
            dif2: _ponerCero != 0 ? 0 : _r2pVenta2 - _r2pCompra2,
            ratio: _ponerCero != 0 ? 0 : (_r2pVenta2 - _r2pCompra2) - (_r2pCompra1 - _r2pVenta1),
            gd30d_q: rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].cantidadVenta : 0,
            gd30d_p: rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].precioVenta : 0,
            gd30c_q: rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].cantidadCompra : 0,
            gd30c_p: rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].precioCompra : 0,
            al30c_q: rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].cantidadVenta : 0,
            al30c_p: rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].precioVenta : 0,
            al30d_q: rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].cantidadCompra : 0,
            al30d_p: rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].precioCompra : 0,
            monto: _ponerCero != 0 ? 0 : 2000,
            q_al30: _ponerCero != 0 ? 0 : _r2CantidadComprada1,
            q_gd30: _ponerCero != 0 ? 0 : _r2CantidadComprada2,
            restoD: _ponerCero != 0 ? 0 : _r2fin2 - _r2fin0,
            restoC: _ponerCero != 0 ? 0 : _r2fin1 - _r2fin3,
            comision: _ponerCero != 0 ? 0 : _r2comision1+_r2comision2+_r2comision3+_r2comision4,
            dia: todaynow
          }

          db.collection("bonos").doc(file).update({
            AL30GD30: admin.firestore.FieldValue.arrayUnion(data),
            GD30AL30: admin.firestore.FieldValue.arrayUnion(data2)
          }).then(()=>{
            console.log("Document successfully written! " + new Date);
            // if(ponerCero == 0){
            //   if((r2pVenta2 - r2pCompra2) - (r2pCompra1 - r2pVenta1) >= 0.24){
            //     client.messages 
            //       .create({ 
            //         body: 'Operar el Ratio AL30/GD30 es '+((r2pVenta2 - r2pCompra2) - (r2pCompra1 - r2pVenta1)).toFixed(2) +' - Ganancia: '+( r2fin2 - r2fin0 + r2comision1+r2comision2+r2comision3+r2comision4).toFixed(2),  
            //         messagingServiceSid: 'MG2725ddba7aa3731b32d48d321e4315c0',      
            //         to: '+541132972905' 
            //       }) 
            //       .then(message => console.log(message.sid)) 
            //       .done();
            //       console.log('Envio SMS');
            //   }
            // }

            // res.status(200).json('OK-Guardado')
          }).catch(function(error) {
            // console.log("Error writing document: ", error);
            db.collection("bonos").doc(file).set({
              AL30GD30: admin.firestore.FieldValue.arrayUnion(data),
              GD30AL30: admin.firestore.FieldValue.arrayUnion(data2)
            })
            // res.status(200).json('Error-Guardado-set')
            console.log("Document successfully create! " + new Date);
          })
        })
        
        })
      .catch(error => console.log('error', error));
}

async function cotizacion48() {
  let urlencoded = new URLSearchParams();
    urlencoded.append("username", "maldo89.19@gmail.com");
    urlencoded.append("password", "M458652m");
    urlencoded.append("grant_type", "password");

    let requestOptions = {
    method: 'POST',
    // headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    let token
    let rdo = []

    let bonos = ['AL30D','AL30C','GD30D','GD30C']

    await fetch("https://api.invertironline.com/token", requestOptions)
      .then(response => response.json())
      .then(json => {

        token = json.access_token
        // console.log(token);

        var requestOptions2 = {
          method: 'GET',
          headers: { 'Authorization': 'Bearer '+token }
          };

        Promise.all(
          bonos.map(async (bono) => {

            await fetch("https://api.invertironline.com/api/v2/{Mercado}/Titulos/{Simbolo}/Cotizacion?mercado=bCBA&simbolo=bonos&model.mercado=bCBA&model.plazo=t2&model.simbolo="+bono, requestOptions2)
            .then(response => response.json())
            .then(result => {
              var b = result
              b.nombre = bono

                // console.log( bono +' '+result.ultimoPrecio)
                rdo.push(b)  
            }
            )
            .catch(error => console.log('error', error));
          })
        ).then(()=>{
          // console.log(rdo);
            // res.status(200).json(rdo)
          let ponerCero = 0
          let todaynow = new Date();
          let dia = todaynow.getDate() < 10 ? '0'+todaynow.getDate() : todaynow.getDate().toString();
          let mes = todaynow.getMonth()+1 < 10 ? '0'+(todaynow.getMonth()+1) : (todaynow.getMonth()+1).toString();
          let anio = todaynow.getFullYear() < 10 ? '0'+todaynow.getFullYear() : todaynow.getFullYear().toString();
          let file = anio+'-'+mes+'-'+dia

          let r2pCompra1 = rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].precioVenta : 0
          let r2CantidadComprada1 = Math.trunc((2000) / r2pCompra1 * 100)
          let r2fin0 = r2CantidadComprada1 *  r2pCompra1 /100
          let r2comision1 = ((r2pCompra1 * r2CantidadComprada1)/100 * (0.01) / 100)*-1
          let r2pVenta1 = rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].precioCompra : 0
          let r2fin1 = r2CantidadComprada1 *  r2pVenta1 /100
          let r2comision2 =  (r2fin1 * (0.01) / 100)*-1
          let r2pCompra2 = rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].precioVenta : 0
          let r2CantidadComprada2 = Math.trunc((r2fin1) / r2pCompra2 * 100)
          let r2fin3 = r2CantidadComprada2 * r2pCompra2 /100
          let r2comision3 = ((r2pCompra2 * r2CantidadComprada2)/100 * (0.01) / 100)*-1
          let r2pVenta2 = rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].precioCompra : 0
          let r2fin2 = r2CantidadComprada2 * r2pVenta2 /100
          let r2comision4 =  (r2fin2 * (0.01) / 100)*-1
          
          ponerCero = r2pCompra1 == 0 ? 1 : 0 + r2pVenta1 == 0 ? 1 : 0 + r2pCompra2 == 0 ? 1 : 0 + r2pVenta2 == 0 ? 1 : 0
          // console.log(ponerCero);

          let data = {
            desde:'AL30',
            hasta:'GD30',
            dif1: ponerCero != 0 ? 0 : r2pCompra1 - r2pVenta1,
            dif2: ponerCero != 0 ? 0 : r2pVenta2 - r2pCompra2,
            ratio: ponerCero != 0 ? 0 : (r2pVenta2 - r2pCompra2) - (r2pCompra1 - r2pVenta1),
            al30d_q: rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].cantidadVenta : 0,
            al30d_p: rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].precioVenta : 0,
            al30c_q: rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].cantidadCompra : 0,
            al30c_p: rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].precioCompra : 0,
            gd30c_q: rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].cantidadVenta : 0,
            gd30c_p: rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].precioVenta : 0,
            gd30d_q: rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].cantidadCompra : 0,
            gd30d_p: rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].precioCompra : 0,
            monto: ponerCero != 0 ? 0 : 2000,
            q_al30: ponerCero != 0 ? 0 : r2CantidadComprada1,
            q_gd30: ponerCero != 0 ? 0 : r2CantidadComprada2,
            restoD: ponerCero != 0 ? 0 : r2fin2 - r2fin0,
            restoC: ponerCero != 0 ? 0 : r2fin1 - r2fin3,
            comision: ponerCero != 0 ? 0 : r2comision1+r2comision2+r2comision3+r2comision4,
            dia: todaynow
          }

          let _ponerCero = 0

          let _r2pCompra1 = rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].precioVenta : 0
          let _r2CantidadComprada1 = Math.trunc((2000) / _r2pCompra1 * 100)
          let _r2fin0 = _r2CantidadComprada1 *  _r2pCompra1 /100
          let _r2comision1 = ((_r2pCompra1 * _r2CantidadComprada1)/100 * (0.01) / 100)*-1
          let _r2pVenta1 = rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].precioCompra : 0
          let _r2fin1 = _r2CantidadComprada1 *  _r2pVenta1 /100
          let _r2comision2 =  (_r2fin1 * (0.01) / 100)*-1
          let _r2pCompra2 = rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].precioVenta : 0
          let _r2CantidadComprada2 = Math.trunc((_r2fin1) / _r2pCompra2 * 100)
          let _r2fin3 = _r2CantidadComprada2 * _r2pCompra2 /100
          let _r2comision3 = ((_r2pCompra2 * _r2CantidadComprada2)/100 * (0.01) / 100)*-1
          let _r2pVenta2 = rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].precioCompra : 0
          let _r2fin2 = _r2CantidadComprada2 * _r2pVenta2 /100
          let _r2comision4 =  (_r2fin2 * (0.01) / 100)*-1
          
          _ponerCero = _r2pCompra1 == 0 ? 1 : 0 + _r2pVenta1 == 0 ? 1 : 0 + _r2pCompra2 == 0 ? 1 : 0 + _r2pVenta2 == 0 ? 1 : 0

          let data2 = {
            desde:'GD30',
            hasta:'AL30',
            dif1: _ponerCero != 0 ? 0 : _r2pCompra1 - _r2pVenta1,
            dif2: _ponerCero != 0 ? 0 : _r2pVenta2 - _r2pCompra2,
            ratio: _ponerCero != 0 ? 0 : (_r2pVenta2 - _r2pCompra2) - (_r2pCompra1 - _r2pVenta1),
            gd30d_q: rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].cantidadVenta : 0,
            gd30d_p: rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].precioVenta : 0,
            gd30c_q: rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].cantidadCompra : 0,
            gd30c_p: rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].precioCompra : 0,
            al30c_q: rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].cantidadVenta : 0,
            al30c_p: rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].precioVenta : 0,
            al30d_q: rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].cantidadCompra : 0,
            al30d_p: rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].precioCompra : 0,
            monto: _ponerCero != 0 ? 0 : 2000,
            q_al30: _ponerCero != 0 ? 0 : _r2CantidadComprada1,
            q_gd30: _ponerCero != 0 ? 0 : _r2CantidadComprada2,
            restoD: _ponerCero != 0 ? 0 : _r2fin2 - _r2fin0,
            restoC: _ponerCero != 0 ? 0 : _r2fin1 - _r2fin3,
            comision: _ponerCero != 0 ? 0 : _r2comision1+_r2comision2+_r2comision3+_r2comision4,
            dia: todaynow
          }

          db.collection("bonos48").doc(file).update({
            AL30GD30: admin.firestore.FieldValue.arrayUnion(data),
            GD30AL30: admin.firestore.FieldValue.arrayUnion(data2)
          }).then(()=>{
            console.log("Document successfully written! " + new Date);
            // if(ponerCero == 0){
            //   if((r2pVenta2 - r2pCompra2) - (r2pCompra1 - r2pVenta1) >= 0.24){
            //     client.messages 
            //       .create({ 
            //         body: 'Operar el Ratio AL30/GD30 es '+((r2pVenta2 - r2pCompra2) - (r2pCompra1 - r2pVenta1)).toFixed(2) +' - Ganancia: '+( r2fin2 - r2fin0 + r2comision1+r2comision2+r2comision3+r2comision4).toFixed(2),  
            //         messagingServiceSid: 'MG2725ddba7aa3731b32d48d321e4315c0',      
            //         to: '+541132972905' 
            //       }) 
            //       .then(message => console.log(message.sid)) 
            //       .done();
            //       console.log('Envio SMS');
            //   }
            // }

            // res.status(200).json('OK-Guardado')
          }).catch(function(error) {
            // console.log("Error writing document: ", error);
            db.collection("bonos48").doc(file).set({
              AL30GD30: admin.firestore.FieldValue.arrayUnion(data),
              GD30AL30: admin.firestore.FieldValue.arrayUnion(data2)
            })
            // res.status(200).json('Error-Guardado-set')
            console.log("Document successfully create! " + new Date);
          })
        })
        
        })
      .catch(error => console.log('error', error));
}
 
  router.get('/token', async(req, res)=>{

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", "maldo89.19@gmail.com");
    urlencoded.append("password", "M458652m");
    urlencoded.append("grant_type", "password");

    var requestOptions = {
    method: 'POST',
    // headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    var token
    var rdo = []

    var bonos = ['AL30D','AL30C','GD30D','GD30C']

    await fetch("https://api.invertironline.com/token", requestOptions)
      .then(response => response.json())
      .then(json => {

        token = json.access_token
        // console.log(token);

        var requestOptions2 = {
          method: 'GET',
          headers: { 'Authorization': 'Bearer '+token }
          };

        Promise.all(
          bonos.map(async (bono) => {

            await fetch("https://api.invertironline.com/api/v2/{Mercado}/Titulos/{Simbolo}/Cotizacion?mercado=bCBA&simbolo=bonos&model.mercado=bCBA&model.plazo=t0&model.simbolo="+bono, requestOptions2)
            .then(response => response.json())
            .then(result => {
              var b = result
              b.nombre = bono

                console.log( bono +' '+result.ultimoPrecio)
                rdo.push(b)  
            }
            )
            .catch(error => console.log('error', error));
          })
        ).then(()=>{
          // console.log(rdo);
            // res.status(200).json(rdo)
          let ponerCero = 0
          let todaynow = new Date();
          let dia = todaynow.getDate() < 10 ? '0'+todaynow.getDate() : todaynow.getDate().toString();
          let mes = todaynow.getMonth()+1 < 10 ? '0'+(todaynow.getMonth()+1) : (todaynow.getMonth()+1).toString();
          let anio = todaynow.getFullYear() < 10 ? '0'+todaynow.getFullYear() : todaynow.getFullYear().toString();
          let file = anio+'-'+mes+'-'+dia

          let r2pCompra1 = rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].precioVenta : 0
          let r2CantidadComprada1 = Math.trunc((2000) / r2pCompra1 * 100)
          let r2fin0 = r2CantidadComprada1 *  r2pCompra1 /100
          let r2comision1 = ((r2pCompra1 * r2CantidadComprada1)/100 * (0.01) / 100)*-1
          let r2pVenta1 = rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].precioCompra : 0
          let r2fin1 = r2CantidadComprada1 *  r2pVenta1 /100
          let r2comision2 =  (r2fin1 * (0.01) / 100)*-1
          let r2pCompra2 = rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].precioVenta : 0
          let r2CantidadComprada2 = Math.trunc((r2fin1) / r2pCompra2 * 100)
          let r2fin3 = r2CantidadComprada2 * r2pCompra2 /100
          let r2comision3 = ((r2pCompra2 * r2CantidadComprada2)/100 * (0.01) / 100)*-1
          let r2pVenta2 = rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].precioCompra : 0
          let r2fin2 = r2CantidadComprada2 * r2pVenta2 /100
          let r2comision4 =  (r2fin2 * (0.01) / 100)*-1
          
          ponerCero = r2pCompra1 == 0 ? 1 : 0 + r2pVenta1 == 0 ? 1 : 0 + r2pCompra2 == 0 ? 1 : 0 + r2pVenta2 == 0 ? 1 : 0
          console.log(ponerCero);

          let data = {
            desde:'AL30',
            hasta:'GD30',
            dif1: ponerCero != 0 ? 0 : r2pCompra1 - r2pVenta1,
            dif2: ponerCero != 0 ? 0 : r2pVenta2 - r2pCompra2,
            ratio: ponerCero != 0 ? 0 : (r2pVenta2 - r2pCompra2) - (r2pCompra1 - r2pVenta1),
            al30d_q: rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].cantidadVenta : 0,
            al30d_p: rdo.find(l => l.nombre == 'AL30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30D').puntas[0].precioVenta : 0,
            al30c_q: rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].cantidadCompra : 0,
            al30c_p: rdo.find(l => l.nombre == 'AL30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'AL30C').puntas[0].precioCompra : 0,
            gd30c_q: rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].cantidadVenta : 0,
            gd30c_p: rdo.find(l => l.nombre == 'GD30C').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30C').puntas[0].precioVenta : 0,
            gd30d_q: rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].cantidadCompra : 0,
            gd30d_p: rdo.find(l => l.nombre == 'GD30D').puntas.length != 0 ? rdo.find(l => l.nombre == 'GD30D').puntas[0].precioCompra : 0,
            monto: ponerCero != 0 ? 0 : 2000,
            q_al30: ponerCero != 0 ? 0 : r2CantidadComprada1,
            q_gd30: ponerCero != 0 ? 0 : r2CantidadComprada2,
            restoD: ponerCero != 0 ? 0 : r2fin2 - r2fin0,
            restoC: ponerCero != 0 ? 0 : r2fin1 - r2fin3,
            comision: ponerCero != 0 ? 0 : r2comision1+r2comision2+r2comision3+r2comision4,
            dia: todaynow
          }

          db.collection("bonos").doc(file).update({
            AL30GD30: admin.firestore.FieldValue.arrayUnion(data)
          }).then(()=>{
            console.log("Document successfully written!");
            if(ponerCero == 0){
              if((r2pVenta2 - r2pCompra2) - (r2pCompra1 - r2pVenta1) >= 0.24){
                client.messages 
                  .create({ 
                    body: 'Operar el Ratio AL30/GD30 es '+((r2pVenta2 - r2pCompra2) - (r2pCompra1 - r2pVenta1)).toFixed(2) +' - Ganancia: '+( r2fin2 - r2fin0 + r2comision1+r2comision2+r2comision3+r2comision4).toFixed(2),  
                    messagingServiceSid: 'MG2725ddba7aa3731b32d48d321e4315c0',      
                    to: '+541132972905' 
                  }) 
                  .then(message => console.log(message.sid)) 
                  .done();
                  console.log('Entro');
              }
            }
            res.status(200).json('OK-Guardado')
          }).catch(function(error) {
            console.log("Error writing document: ", error);
            db.collection("bonos").doc(file).set({
              AL30GD30: admin.firestore.FieldValue.arrayUnion(data)
            })
            res.status(200).json('Error-Guardado-set')
          })

        //   db.collection("ventas").doc(dataPayment.id.toString()).set({
        //     "date": fecha ,
        //     "payerPayment" : dataPayment.payer,
        //     "transaction_details" : dataPayment.transaction_details,
        //     "IdOrden" : dataOrders.id,
        //     "items" : dataOrders.items,
        //     "shipments" : dataOrders.shipments,
        //     "order_status" : dataOrders.order_status,
        //     "collector" : dataOrders.collector,
        //     "payments" : dataOrders.payments,
        //     "cancelled" : dataOrders.cancelled,
        //     'payer' : dataPreference.payer
        //   }).then(()=>{
        //     console.log("Document successfully written!");
        //     res.status(200).json('OK-Guardado')
        //   }).catch(function(error) {
        //     console.log("Error writing document: ", error);
        //     res.status(200).json('Error-Guardado')
        //   })
        })
        
        })
      .catch(error => console.log('error', error));

    })

  // exportar de router
  module.exports = router;