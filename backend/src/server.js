const express = require('express');
// import express
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

// Import 3rd party libraries

const { ResponseService } = require('./services');
const Error = require('./config/constant/Error');
const { globalErrorHandler } = require('./middlewares');
const { QrCodeRouter, AuthRouter, ImgRouter } = require('./routers');
const fileStorage = require('./config/constant/fileStorage');
const { imgTypeValidator } = require('./utils');

// Express views
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

// Import env

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config({ path: path.join(__dirname, '../.env') });
  app.use(morgan('dev'));
}

// set security http headers
app.use(helmet());

// CORS for server and client communication
app.use(
  cors({
    credentials: true,
    origin: '*',
  })
);

// set limit request from same API in timePeroid from same ip
// set this limit to API calls only
const limiter = rateLimit({
  max: 20, //   max number of limits
  windowMs: 5 * 60 * 1000, // 5 minutes
  message: ' Too many req from this IP , please Try  again in 5 minutes!',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skipSuccessfulRequests: true, // skip if the request is succesful
});

app.use('/api', limiter);

//  Body Parser  => reading data from body into req.body protect from scraping etc
// parses incoming requests with JSON payloads
// content-type: application/json
app.use(express.json({ limit: '10kb' }));

// Enable parsing cookies to read
app.use(cookieParser());

// Data sanitization against NoSql query injection
app.use(mongoSanitize()); // filter out the dollar signs protect from  query injection attack

// Data sanitization against XSS
app.use(xss()); // protect from molision code coming from html

// Storage
app.use(multer({ storage: fileStorage, fileFilter: imgTypeValidator }).single('image'));

// Deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'));
    res.end();
  });
}

// Use specific Router to handle each end point
app.use('/auth', AuthRouter);
app.use('/api/qrCode', QrCodeRouter);
app.use('/api/uploadImage', ImgRouter);

// handling all (get,post,update,delete.....) unhandled routes
app.use('*', (req, res, next) => {
  next(ResponseService.newError(Error.UrlNotFound.errCode, Error.UrlNotFound.errMessage));
});

// error handling middleware
app.use(globalErrorHandler);

// running
// Connect to Mongoose
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log(`Connecting to Mongoose successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// handle Globaly the unhandle Rejection Error which is  outside the express
// e.g database connection
process.on('unhandledRejection', (error) => {
  // it uses unhandledRejection event
  // using unhandledRejection event
  console.log(' Unhandled Rejection => shutting down..... ');
  console.log(error.name, error.message);
  server.close(() => {
    process.exit(1); //  emidiatly exists all from all the requests sending OR pending
  });
});
