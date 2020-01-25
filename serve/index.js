var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');/* middleware that handle post from front end*/
app.use(bodyParser.json());// conveart to json file
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, '../dist')));
var Mongo = require('../db/index');

app.get('/allData', (request, response) => {  
    Mongo.allData((err,result)=>{
        if(err){
            response.send(err);
        }else{
            response.send(result);
        }
    })
})




var service = app.listen(8081, () => {
  var host = service.address().address;
  var port = service.address().port;

  console.log("service port is http://127.0.0.1", port)

  //http://127.0.0.1:8081/
})
