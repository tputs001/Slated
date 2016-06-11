var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.post('/search', function(req, res){
  console.log(req.body.term)
  request({
    url: 'http://www.slated.com/films/autocomplete/profiles/?',
    qs: {
          term: req.body.term
        }
  }, function(error, response, body){
    res.send(body)
  })
})

var port = process.env.PORT || 1337;
app.listen(port, function(){ console.log("Listening on port " + port)})
