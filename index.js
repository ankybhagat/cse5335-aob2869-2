var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/country', function(request, response) {
	var country= [
  {
    "code": "AD",
    "name": "Andorra",
    "population": "84000"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "population": "4975593"
  },
  {
    "code": "AF",
    "name": "Afghanistan",
    "population": "29121286"
  },
  {
    "code": "AG",
    "name": "Antigua and Barbuda",
    "population": "86754"
  },
  {
    "code": "AI",
    "name": "Anguilla",
    "population": "13254"
  },
  {
    "code": "AL",
    "name": "Albania",
    "population": "2986952"
  },
  {
    "code": "AM",
    "name": "Armenia",
    "population": "2968000"
  },
  {
    "code": "AO",
    "name": "Angola",
    "population": "13068161"
  },
  {
    "code": "AM",
    "name": "Armenia",
    "population": "2968000"
  },
  {
    "code": "AO",
    "name": "Angola",
    "population": "13068161"
  },
  {
    "code": "AQ",
    "name": "Antarctica",
    "population": "0"
  }
  ]
 
  response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(country));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});