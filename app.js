/*
//------------------------------------READ ME
These are code examples used for a PDC Meetup to explain ExpressJS
Find the related slides at https://docs.google.com/presentation/d/1GgIRrRRvS6ZTcIPYTsGZ8p_WwlHUQHlsZfqI_vm2OqI/edit?usp=sharing
*/



/*
//------------------------------------Hello World
var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);


*/
/*
//------------------------------------Routes
var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(3000);


*/
/*
//------------------------------------Routers
var express = require('Express');
var app = express();

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(3000);





*/
/*
//------------------------------------URLs and Data Passing
var express = require('express');
var app = express();

app.get('/static', function(req, res){
   res.send('This is a static route');
});

app.get('/:entity', function(req, res){
   res.send('This is a dynamic route. The entity you specified is ' + req.params.entity);
});

app.get('/something/:id([0-9]{5})', function(req, res){
   res.send('This is a regex based route. The id you entered id ' + req.params.id);
});

app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.get('/testquery', function(req, res){
   res.send('This is /testquery route');
});

app.listen(3000);



*/
/*
//------------------------------------Templating
var express = require('Express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first_template', function(req, res){
   res.render('first_view');
});

app.listen(3000);



*/
/*
//------------------------------------Static files
var express = require('Express');
var app = express();

app.use(express.static('public'));

app.listen(3000);



*/
/*
//------------------------------------Cookies
//npm install --save cookie-parser
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/setcookie', function(req, res){
   res.cookie('name', 'pdc express').send('Cookie set. Visit /getnamecookies');
});
app.get('/getnamecookies', function(req, res){
  var name = req.cookies.name;
  res.send(name);
});

app.listen(3000);



*/
/*
//------------------------------------Sessions
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(3000);


*/
/*
//------------------------------------Authentication
//THIS CODE IS NOT RUNNABLE (replace the 'user' variable you your user)
app.post('/login', function(req, res){
  //do your db queries and get the user in memory
  req.session.user = user;
  res.json({response:"ok"});
});

//middleware which check session
function checkSignIn(req, res, next){
   if(req.session.user){
      next();     //If session exists, proceed to page
   } else {
      var err = new Error("Not logged in!");
      next(err);  //Error, trying to access unauthorized page!
   }
}

app.get('/protected_page', checkSignIn, function(req, res){
   res.render('protected_page', {id: req.session.user.id})
});

app.get('/logout', function(req, res){
   req.session.destroy(function(){   });
   res.redirect('/login');
});


*/
/*
//------------------------------------Error Handling
var express = require('express');
var app = express();

app.get('/', function(req, res){
   //Create an error and pass it to the next function
   var err = new Error("Something went wrong");
   next(err);
});

//other route handlers and middleware here

//An error handling middleware
app.use(function(err, req, res, next) {
   res.status(500).send("Oops, something went wrong.")
});

app.listen(3000);
*/
