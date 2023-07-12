const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

/**
 * require routers
 */
const authRouter = require('./routes/auth');
const dashboardRouter = require('./routes/dashboard');

// Cross-origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
/**
 * built in middleware to handle parsing request body
 */
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

/**
 * serve the main index file when request goes to '/'
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

/**
 * handle requests for static files
 */
app.use('/client', express.static(path.resolve(__dirname, '../client')));

/**
 * define route handlers
 */

console.log('REACHED the server before entering the router');
app.use('/auth', authRouter);
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
// protect the dashboard with verifyJWT
// app.use(verifyJWT);
app.use('/dashboard', dashboardRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

/**
 * global express error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
