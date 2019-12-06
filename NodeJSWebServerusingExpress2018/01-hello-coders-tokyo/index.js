var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
var adapter = new FileSync('db.json')
var db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write()

var port = 1000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
  res.render('index', {
    name: 'AAA'
  });
});

app.get('/users', function(req, res) {
  res.render('users/index', {
    users: db.get('users').value()
  });
});

app.get('/users/search', function(req, res) {
  var q = req.query.q;
  var matchedUsers = users.filter(function(user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render('users/index', {
    users: matchedUsers
  });
});

app.get('/users/create', function(req, res) {
  res.render('users/create');
});

app.post('/users/create', function(req, res) {
  db.get('users').push(req.body).write();
  res.redirect('/users');
});

// Add a post
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()


app.listen(port, function() {
  console.log('Server listening on port ' + port);
})