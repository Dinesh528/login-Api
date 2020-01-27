const express = require('express');

const app = express();
const passport = require("passport");
const config = require('./DB');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const PORT = 4000;

const mongoose =require('mongoose');
mongoose.Promise = global.Promise;

const newRoute = require('./news.route');
const users = require("./routes/UserRoute");


mongoose.connect(config.DB,{useNewUrlParser: true}).then(
    res=>{
        console.log('Database successfully connected..');
    },
    err => {
        console.log(err);
    }
);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./passport")(passport);
// Routes
app.use("/api/users", users);

app.use('/news',newRoute);

app.listen(PORT, function(){
    console.log('Server is running on http://localhost:4000/news');
});