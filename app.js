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
const mongoose = require("mongoose")
const flash = require('express-flash')//error display
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

//Express views
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

//Session middleware
const MONGODB_URI = 'mongodb+srv://Khoi:1234@cluster0.owhumte.mongodb.net/user'
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
})
app.use(session({secret: 'SEPM', resave: false, saveUninitialized: false, store: store}))

//Controllers & Routers
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/login', (req, res) => {
  res.render('login.ejs')
})

app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  //If password exists
  User.findOne({email: email}).then(user => {
    if(!user) {
      console.log('No such user')
      return res.redirect('/login')
    }
    //Check password match
    bcrypt.compare(password, user.password).then(doMatch => {
      if(doMatch) {
        //Return to homepage
        console.log('Login success')
        req.session.isLoggedIn = true
        req.session.user = user
        return req.session.save(err => {
          console.log(err)
          console.log('Redirected')
          res.redirect('/')
        })
        // return res.redirect('/')
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
    console.log('Created User');
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