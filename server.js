var listenport = Number(process.env.PORT || 3000 );   				//TCP listening port
var secret = "testmeraki";											//Secret that you chose in the Meraki dashboard
var validator = "fb626b98204dc2cde9f569e4e0e65fbaf37a441e";			//Validator string that is shown in the Meraki dashboard

var express = require('express');
var http = require('https');
var request = require('request');
var bodyParser = require('body-parser');
var util = require('util');

// create our app
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.bodyParser());


//test step- to see what happens when I send a GET request from my browser
app.get('/', function (req, res) {
  res.send('Hello World!');
});

/*
app.get('/meraki', function(req, res){
  res.send(validator);
  console.log("sending validation")
});


app.post('/meraki', function(req, res){ 
	try {
		var jsoned = JSON.parse(req.body.data);
		console.log(typeof(jsoned));
		for(var exKey in jsoned) {
			console.log("key:"+exKey+", value:"+jsoned[exKey]);
			}
			
		var secretSent = jsoned['secret'];
		console.log(typeof(secretSent));
// 		console.log(util.inspect(req.body.data, {showHidden: false, depth: null}));
	  
	  if (secretSent == secret) {
		  for (i=0; i<jsoned.probing.length; i++) {
			  console.log("client " + jsoned.probing[i].client_mac + " seen on ap " + jsoned.probing[i].ap_mac + " with rssi " + jsoned.probing[i].rssi + " at " + jsoned.probing[i].last_seen);
		  }
	   } else {
		   console.log("invalid secret" + secretSent + "from  " + req.connection.remoteAddress);
	   }
	} catch (e) {
		// An error has occured, handle it, by e.g. logging it
  	console.log("Error.  Likely caused by an invalid POST from " + req.connection.remoteAddress + ":");
  	console.log(e);
  	res.end();
  }
  
});
*/

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */

// var bodyParser = require('body-parser');

// var provisioningTool = require('./controller/controller.js');

// instruct the app to use the `bodyParser()` middleware for all routes
// app.use(bodyParser());
// app.set('view engine', 'ejs');



// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.

// app.get('/getorginfo', provisioningTool.getOrgInfo);

// function(req, res){
//   // The form's action is '/' and its method is 'POST',
//   // so the `app.post('/', ...` route will receive the
//   // result of our form
// //   var html = '<form action="/" method="post">' +
// //                'Enter your name:' +
// //                '<input type="text" name="userName" placeholder="..." />' +
// //                '<br>' +
// //                '<button type="submit">Submit</button>' +
// //             '</form>';
// //                
// 
// // GET request to get list of all organizations that Admin with Key has access to
// // Input: Admin API-Key
// 	var options = { method: 'GET',
// 	  url: 'https://dashboard.meraki.com/api/v0/organizations',
// 	  headers: 
// 	   { 'postman-token': 'a90173b2-b55c-6301-0d28-b13a3966b551',
// 		 'cache-control': 'no-cache',
// 		 'x-cisco-meraki-api-key': '8b65922df96c337df3c7f73c6e173861190793e6' } };
// 
// 	request(options, function (error, response, body) {
// 	  if (error) throw new Error(error);
// 
// 	  console.log(body);
// 	  res.render('index.ejs',{networkData:org.networkTableVlan, unusedSubnet:findUnusedSubnet()});
// // 	res.send("I have all the org information now!!!");	
// 	
// 	});
// });

// app.get('/createnetwork', provisioningTool.createNetwork);


// function(req, res){
//   // The form's action is '/' and its method is 'POST',
//   // so the `app.post('/', ...` route will receive the
//   // result of our form
// //   var html = '<form action="/" method="post">' +
// //                'Enter your name:' +
// //                '<input type="text" name="userName" placeholder="..." />' +
// //                '<br>' +
// //                '<button type="submit">Submit</button>' +
// //             '</form>';
// //                
// 
// // Create a new network using a post Request
// // Inputs:
// // (1) Shard number- nXXX.meraki.com
// // (2) Admin API-Key
// // (3) Network information
// 
// 	var options = { method: 'POST',
// 	  url: 'https://n131.meraki.com/api/v0/organizations/370497/networks',
// 	  headers: 
// 	   { 'postman-token': '8582d1f4-fe3d-f534-2b4a-388a497ed678',
// 		 'cache-control': 'no-cache',
// 		 'x-cisco-meraki-api-key': '8b65922df96c337df3c7f73c6e173861190793e6',
// 		 'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
// 	  formData: { name: 'testNetworkViaAPI-NodeJS', type: 'wireless', tags: 'test' } };
// 
// 	request(options, function (error, response, body) {
// 	  if (error) throw new Error(error);
// 
// 	  console.log(body);
// 	});	
// 	res.send("Networks ahve been created as requested!!!!");
// });

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
// app.post('/', function(req, res){
//   var userName = req.body.userName;
//   var html = 'Hello: ' + userName + '.<br>' +
//              '<a href="/">Try again.</a>';
//   res.send(html);
// });

// app.get('/claimdevice', provisioningTool.claimDevice);

app.listen(listenport, function(err) {
	if (err) return console.log(err);
	console.log("Meraki CMX Receiver listening on port at 1636: " + listenport);
});
