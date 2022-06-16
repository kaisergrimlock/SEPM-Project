//Import env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//Import user model
User = require('./models/user')

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

//Express views
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

//Controllers & Routers
app.get('/', (req, res) => {
  res.render('index.ejs', { name: req.user.name })
})

app.get('/login', (req, res) => {
  res.render('login.ejs')
})

app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  User.findOne({email: email}).then(user => {
    if(!user) {
      console.log('No such user')
      return res.redirect('/login')
    }
    bcrypt.compare(password, user.password).then(doMatch => {
      if(doMatch) {
        console.log('Login success')
        req.session.isLoggedIn = true
        req.session.user = user
        return req.session.save(err => {
          console.log(err)
          res.redirect('/')
        })
      }else{
        console.log('Wrong password')
        return res.redirect('/login')
      }
    }).catch(err => {
      return res.redirect('/login')
    })
  })
})

app.get('/register', (req, res) => {
  res.render('register.ejs')
})

app.post('/register', async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const user = new User({
    name: name,
    email: email,
    password: hashedPassword
  })
  user
  .save()
  .then(result => {
    // console.log(result);
    console.log('Created Product');
    res.redirect('/login');
  })
  .catch(err => {
    console.log(err);
  })
})

//Connect to Mongoose
mongoose.connect('mongodb+srv://Khoi:1234@cluster0.owhumte.mongodb.net/user?retryWrites=true&w=majority').then(result => {
  console.log('Connected')
}).catch(err => {
  console.log(err)
})

app.listen(3000)