require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const userRoutes = require('./routes/api/usersRoutes');
const app = express();

//==========================
// Bodyparser middleware
//==========================
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//==========================
// DB Config
//==========================
const db = require("./config/keys").mongoURI;

//==========================
// Connect to MongoDB
//==========================
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
//==========================
// Passport Middleware
//==========================
app.use(passport.initialize());
//==========================
// Passport config
//==========================
require('./config/passport')(passport);

//==========================
// Routes
//==========================
app.use('/api/users', userRoutes);

const port = process.env.PORT || 8000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
