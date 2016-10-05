var express = require('express');
var handlebars = require('handlebars');
var fs = require('fs');
var path = require('path');

var app = express();

//app.use('/test', express.static(path.join(__dirname,'/../client/dist/css')));
app.use('/test', express.static('/home/ubuntu/workspace/client/css'));
app.use('/static', express.static('/home/ubuntu/workspace/client-dist'));

app.set('view engine', 'hbs');
//app.set('view engine', 'html');
//app.engine('html', require('hbs').__express);

app.get('/', function (req, res) {
  res.send('<html><head></head><body><h1>Test 4</h1><p>Hello World 9xx!</p></body></html>');
});

app.get('/home', function (req, res) {
  
  reloadPartials();
  
  var data = {
      "title": "Test 001" 
    };
  fs.readFile('templates/home.hbs', function(err, template){
    var html = renderToString(template.toString(), data)
    res.send(html)
  });
});


function reloadPartials() {
  var partialsDir = __dirname + '/templates';
  var filenames = fs.readdirSync(partialsDir);
  filenames.forEach(function (filename) {
    var matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
      return;
    }
    var name = matches[1];
    var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
    handlebars.registerPartial(name, template);
  });
}


function renderToString(template, data) {
  var tpl = handlebars.compile(template);
  var outputString = tpl(data);
  return outputString;
}

app.get('/home2', function (req, res) {
  res.render('templates/home.hbs', {
    title: 'Home'
  })
});


let port = 8080;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});