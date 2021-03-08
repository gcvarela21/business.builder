var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
var app = express();

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3001;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "danielle-bakery", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const YOUR_DOMAIN = 'http://localhost:3000/checkout';

app.post('/create-checkout-session', async (req, res) => {

    console.log(req.body)
    stripeLineItem = req.body.cartItems.map(function (item) {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.itemName,
                    images: [item.itemImg],
                },
                unit_amount: item.itemPriceCent,
            },
            quantity: item.itemQuantity,
        }
    })
    console.log(stripeLineItem)
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: stripeLineItem,
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/canceled`,
    });
    res.json({ id: session.id });
});



// Requiring our routes
routes = require("./routes");
app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});

// sun todo

// client-side 
    // 1. checkout/cart page >-> sends local storage to DB and clears local storage
    // 2. learn how stripe works and react calendar
    // 2. build admin page (change, delete, and create button)
    // 3. when home component mounts (useeffect) uses run utility on homepage ----------- localstorage.length
    // 4. add izitoast notificaitons to modal and on submit close the modal when user inputs quantity

// server



// questions for jerome
    // how do we know if payment was sent - how do we know if they actually completed the transaction? i cant push patron info/itemid+cart until its confirmed they paid
