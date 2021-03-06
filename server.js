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
    // 1. when home component mounts (useeffect) uses run utility on homepage
    // 2. run utility for indexdb set pending to readwrite = true, set transaciton with store
    // - checks for db name and version num
    // 3. store.getAll - looks for everything in indexdb store
    // 4. getNumItems - only sends back length of the array to show shopper how many items are in the cart
    // 5. when we get back the number update state to update navbar component


// client shop
    // 0. API call using axios to only show the category the user wants api/item/ or 
    // 1. when home component mounts (useeffect) uses run utility on homepage
    // 2. run utility for indexdb set pending to readwrite = true, set transaciton with store
    // - checks for db name and version num
    // 3. store.getAll - looks for everything in indexdb store
    // 4. send back whole array
    // 5. insertItem - similar to saveRecord in 17-nosql 26-budgettracker


// sat todo

// client-side 
    // 1. modal functionality
    // 2. build admin page - change add-to-cart to change item and add delete button onto adminItemCard, also add addItem butt, also add popup page with editting capabilities
    // 3. add popup page
    // 4. cart stuff (see above) - new pagina



