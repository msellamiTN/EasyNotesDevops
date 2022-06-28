var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

 

var app = express();
app.use(cors());
//file system (IO)
var fs = require("fs");
//L'accueil => Index
app.get('/', (req, res) => {
    res.send('Hello DVSF Team!')
  })

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
 })
 

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })