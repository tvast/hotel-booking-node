var app = require('express')();
var http = require('http').createServer(app);
const socket = require('socket.io')
const cors = require('cors')
var express = require('express')
const bodyParser = require('body-parser');
var parse = require('socket.io')(http);
const fetch = require('node-fetch');
var { token, flightSearch, createOrder, flightPrice,citySearch, endpoints } = require('@tvast/plume.js')
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);
var NaseUrl = "https://test.api.amadeus.com"
let returnSearch ="";
let confirmOrder = "";
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.post('/citySearch', function(req, res) {

  keyword = req.body.keyword;
  // countryCode =req.body.countryCode;
  var urlSend= "&keyword="+keyword
    
  try 
{//put your id and secret key into it
  token("qztkbf5XWjNSGkXRF9bfAwNg6bELWvVD","w9mJ7ZJzlEGNffut").then(function(tokenAuth){
    // console.log(tokenAuth);
    var NaseUrl = "https://test.api.amadeus.com"
     try {
          citySearch(endpoints.citySearch, NaseUrl, urlSend, tokenAuth.access_token).then(function(y){
          console.log(y)
          returnSearch=y
          res.send(JSON.stringify(y));
          });
        } 
        catch(error) {
          console.error(error);
        }

      })}
      catch(error) {
      console.error(error);
    }
    
})
//get flight offer
app.post('/hotel', function(req, res) {
  keyword = req.body.keyword;
  guest = req.body.guest;
console.log(keyword)
try 
{
  token("qztkbf5XWjNSGkXRF9bfAwNg6bELWvVD","w9mJ7ZJzlEGNffut").then(function(tokenAuth){
// console.log(tokenAuth.access_token)

      async function hotel(city) {
  // returnSearch ="";
  // console.log(url)
  // Default options are marked with *
      const response = await fetch("https://test.api.amadeus.com/v2"+"/shopping/hotel-offers?cityCode="+keyword , {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          // 'Content-Type': 'application/json'   
          //'Content-Type': ,
          'Content-Type': 'application/x-www-form-urlencoded',authorization: 'Bearer '+tokenAuth.access_token
         },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        // body: 
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    }

  hotel(keyword).then(w=>res.send(JSON.stringify(w)));

    })

}
catch(error) {
  console.error(error);
}

  }); 


var server = app.listen(process.env.PORT || 2800,()=>{
  console.log("Howdy, I am running at PORT 2800")
})

let io =  socket(server);

io.on("connection", function(socket){
  console.log("Socket Connection Established with ID :"+ socket.id)
})
