import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripeUtil = {
    stripeCheckout: async function (cartItems) {
        const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
        const stripe = await stripePromise;
        return axios.post("/create-checkout-session", { cartItems })
            .then(async function (data) {
                console.log(data)
                // const result = await stripe.redirectToCheckout({
                //     sessionId: data.data.id,
                // });
            })
            .catch(function (err) {
                console.log(err)
            })

        // console.log(cartItems)
        // const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.

        // if (result.error) {
        //     // If `redirectToCheckout` fails due to a browser or network
        //     // error, display the localized error message to your customer
        //     // using `result.error.message`.
        // }
    }
}

export default stripeUtil;