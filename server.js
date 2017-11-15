//--Module import--

//Server related modules
const express = require('express');
const path = require('path');


//Server routes modules
const userRoutes = require('./server/routes/userRoutes');
const lessonRoutes = require('./server/routes/lessonRoutes');

//Authtenication modules
var expressSession = require('express-session');
var passport = require('passport');
var passportize = require('./server/authentication/passport');
var authHelper = require('./server/authentication/helpers');


passportize(passport);


//create body parser object
const bodyParser = require('body-parser');


//create new express object
const app = express();

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(express.static('./node_modules'));


//use body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cookie-parser')());

app.use(expressSession({ secret: 'thisIsASecret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());





// // route for login action
// app.post('/api/login', function(req, res) {
//   passport.authenticate('local-login', {
//     successRedirect: '/success',
//     failureRedirect: '/login',
//     session: false
//   });
// });

// app.post('/api/login', passport.authenticate('local-login'), function(err, result, info){
//   console.log("passport user", req.user);
// });


//Use routes middleware
 app.use('/api/users', userRoutes);
 app.use('/api/lessons', lessonRoutes);

// app.use('/sections', sectionRoutes);
// app.use('/content', contentRoutes);

app.get('/user/validate', function(req, res, next) {
  if (req.user){
      res.send(req.user);
  }
  else 
    res.send(false);
});

app.post('/api/login', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/');
    });
  })(req, res, next);
});


app.get('/*', function (req, res) {
  res.send(path.join(__dirname, '/server/static/index.html'));
});



// start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});



