var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3001;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "danielle-bakery", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
routes = require("./routes");
app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});

// client home


// sun todo

// client-side 
    // 1. checkout/cart page >-> show itemName, itemPrice, quantity, total price and checkout button which sends local storage to DB and clears local storage
    // 2. learn how stripe works and react calendar
    // 2. build admin page (change, delete, and create button)
    // 3. when home component mounts (useeffect) uses run utility on homepage ----------- localstorage.length
    // 4. add izitoast notificaitons to modal and on submit close the modal when user inputs quantity

// server