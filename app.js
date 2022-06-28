var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});
 
  //Permet de recuperer la liste de documents sous forme de JSON
  app.get('/listbooks', function (req, res) {
    fs.readFile( __dirname + "/" + "dataBook.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })
 //Ajout d'un nouveau chapitre
 
 app.post('/addBook', function (req, res) {
     // First read existing books.
     fs.readFile( __dirname + "/" + "dataBook.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        //data["cours"] = user["cours"];
        console.log( data );
        res.end( JSON.stringify(data));
     });
  });
  
 
// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
