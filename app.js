//Import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

//Import bcrypt to encrypt password
const bcrypt = require('bcrypt')

const app = express();

const users = []

//Import passport functions
const initializePassport = require('./passport-config')

//Declare view-engine
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: false}))

//Routers
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res, next) => {
    res.render('login.ejs')
})


app.listen(3000);