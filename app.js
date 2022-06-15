//Import env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//Import 3rd party libraries
const express = require('express')//import express
const app = express()
const bcrypt = require('bcrypt')//for encryption of password
const passport = require('passport')//for login
const mongoose = require("mongoose")
const passportLocalMongoose = require('passport-local-mongoose')
const flash = require('express-flash')//error display
const session = require('express-session')
const methodOverride = require('method-override')
const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

//Import user model
const users = []
User = require('./models/user')

//Mongoose setters
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect("mongodb://localhost/auth_demo_app");

//Express views
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

//Login
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

//Controllers & Routers
app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  const user = new User({
    name: name,
    email: email,
    password: password
  })
  user
  .save()
  .then(result => {
    // console.log(result);
    console.log('Created Product');
    res.redirect('/admin/products');
  })
  .catch(err => {
    console.log(err);
  })
  res.redirect('/login')
  // try {
  //   const hashedPassword = await bcrypt.hash(req.body.password, 10)
  //   users.push({
  //     id: Date.now().toString(),
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: hashedPassword
  //   })
  //   res.redirect('/login')
  // } catch {
  //   res.redirect('/register')
  // }
})

//Logout
app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

//Connect to Mongoose
mongoose.connect('mongodb+srv://Khoi:1234@cluster0.owhumte.mongodb.net/user?retryWrites=true&w=majority').then(result => {
  console.log('Connected')
}).catch(err => {
  console.log(err)
})

app.listen(3000)