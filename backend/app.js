const express = require('express')//import express
const app = express()
const cors = require('cors')
app.use(cors({origin:'*'}))
app.use(express.json({ limit: '10kb' }))
//Import env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//Import multer
const multer = require('multer')

//Import user model
User = require('./models/user')

//Import 3rd party libraries

const bcrypt = require('bcryptjs')//for encryption of password
const mongoose = require("mongoose")
const flash = require('connect-flash')//error display
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const qrcode = require('qrcode')

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

//Flash middleware
app.use(flash())

//Controllers & Routers
app.get('/', checkAuthenticated, (req, res) => {
  const name = req.session.user.name
  res.render('index.ejs', {name: name})
})

//Login
app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs', {error: req.flash('error')})
})

app.post('/login', checkNotAuthenticated, (req, res) => {
  const email = req.body.email
  const password = req.body.password
  //If password exists
  User.findOne({email: email}).then(user => {
    if(!user) {
      // console.log('No such user')
      // req.flash('error', 'Invalid email or password')
      // return res.redirect('/login')
      return res.status(401).send({message: 'Invalid email or password'})
    }
    //Check password match
    bcrypt.compare(password, user.password).then(doMatch => {
      if(doMatch) {
        //Login successful
        // console.log('Login success')
        res.status(202).send({message: 'Login success'})
        //Store session information onto MongoDB
        req.session.isLoggedIn = true
        req.session.user = user
        return req.session.save(err => {
          console.log(err)
          //Redirect back to homepage
          // console.log('Redirected')
          // res.redirect('/')
        })
      }else{
        // console.log('Wrong password')
        // req.flash('error', 'Invalid email or password')
        // return res.redirect('/login')
        res.status(401).send({message: 'Invalid email or password'})
      }
    }).catch(err => {
      // return res.redirect('/login')
      res.status(500).send({message: 'Internal Server Error'})
    })
  })
})

//QR Code
app.get('/qrcode', checkNotAuthenticated, async(req, res) => {
  res.render('qrcode.ejs')
})

app.post('/scan', checkNotAuthenticated, async(req, res) => {
  const input_text = req.body.text
  console.log(input_text)
  qrcode.toDataURL(input_text, (err, src) => {
    res.render('scan.ejs', {
      qr_code: src, 
    })
  })
})

//Register
app.get('/register', checkNotAuthenticated, async (req, res) => {
  res.render('register.ejs', {error: req.flash('error')})
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const hashedPassword = await bcrypt.hash(req.body.password, 10)//Hash password

  console.log(name, email, hashedPassword)
  User.findOne({email: email}).then(user => {
    if(user){
      // req.flash('error', 'Duplicate email')
      // res.redirect('/register')
      return res.status(401).send({message: "Duplicate email"})
    }
  })

  //Store user info onto MongoDB
  const user = new User({
    name: name,
    email: email,
    password: hashedPassword
  })
  user
  .save()
  .then(result => {
    // console.log(result);
    // console.log('Created User');
    // res.redirect('/login');
    res.status(200).send({message: "Created User"})
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({message: "Internal Server error"})
  })
})

//Check authentication to load pages
function checkAuthenticated(req, res, next) {
  if (req.session.isLoggedIn) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.session.isLoggedIn) {
    return res.redirect('/')
  }
  next()
}

//Logout functionalities
app.post('/logout', async (req, res) => {
  req.session.destroy(err => {
    console.log(err)
    console.log('logged out')
    res.redirect('/')
  })
})

//Storage Engine
const fileStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

//File Filter
const fileFilter =  (req, file, cb) => {
  if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
    cb(null, true)
  }else{
    cb(null, false)
  }
}

//Storage
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))

//Upload image
app.post('/upload', (req, res) => {
  const imagefile = req.file
  console.log("Image:"+ imagefile)
  res.redirect('/')
})


//Connect to Mongoose

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Khoi:1234@cluster0.owhumte.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// mongoose.connect('mongodb+srv://Khoi:1234@cluster0.owhumte.mongodb.net/user?retryWrites=true&w=majority').then(result => {
//   console.log('Connected')
// }).catch(err => {
//   console.log(err)
// })

app.listen(8080)