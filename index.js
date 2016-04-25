var express = require('express');
var app = express();
var pg = require('pg');


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
})

app.get('/country', function(request, response) {

  var x = request.param('id');

	var country= [
  {
    "code": "AD",
    "name": "Andorra",
    "population": "84000",
    "latitude":"42.506317",
    "longitude":"1.521835"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "population": "4975593",
    "latitude":"42.506317",
    "longitude":"1.521835"
  },
  {
    "code": "AF",
    "name": "Afghanistan",
    "population": "29121286",
    "latitude":"34.343044",
    "longitude":"62.199074"
  },
  {
    "code": "AG",
    "name": "Antigua and Barbuda",
    "population": "86754",
    "latitude":"17.087635",
    "longitude":"-61.772346"
  },
  {
    "code": "TX",
    "name": "Texas",
    "population": "13254",
    "latitude":"30.487400",
    "longitude":"-95.987228"
  },
  {
    "code": "AL",
    "name": "Albania",
    "population": "2986952",
    "latitude":"41.327953",
    "longitude":"19.819025"
  },
  {
    "code": "AM",
    "name": "Armenia",
    "population": "2968000",
    "latitude":"40.177200",
    "longitude":"44.503490"
  },
  {
    "code": "AO",
    "name": "Angola",
    "population": "13068161",
    "latitude":"-8.310000",
    "longitude":"14.250000"
  },
  
  {
    "code": "AQ",
    "name": "Antarctica",
    "population": "0",
    "latitude":"-76.300003",
    "longitude":"-148.000000"
  },
  
  {
    "code": "AR",
    "name": "Argentina",
    "population": "41343201",
    "latitude":"-34.603722",
    "longitude":"-58.381592"
  },
  {
    "code": "AT",
    "name": "Austria",
    "population": "8205000",
    "latitude":"47.080574",
    "longitude":"10.461447"
  },
  ]
 
  response.setHeader('Content-Type', 'application/json');
    response.send(country[x]);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});