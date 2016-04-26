var express = require('express');
var app = express();
var pg = require('pg');
//var con="postgres://zfqdzrffxhdbgw:TvM7zTFns7nctywAEFi1_8MXVw@ec2-54-197-254-213.compute-1.amazonaws.com:5432/dapsioq4fqt59o";
var con="postgres://postgres:140392@localhost/postgres";

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/db', function (request, response) {
  pg.connect(con, function(err, client, done) {
       
    client.query('SELECT * FROM country', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
        {
         // var result.rows = JSON.parse(results);
         // console.log(results);
         response.json('/db', {"results": result.rows} ); 
         // response.json({"Code":result.rows,"Country":result.rows,"Population":result.rows});
       }
    });
  
  });
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});