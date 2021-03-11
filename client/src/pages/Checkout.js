import React, { useEffect, useState } from "react";
import CheckoutCard from "../components/CheckoutCard"
import StripeUtil from "../utils/StripeUtil";


function CartCheckout() {
    const [cartItems, setCartItems] = useState([]);
    // function that takes in cart items to sum them

    // const [pickup, setPickup] = useState();

    // const pickupOptions = [
    //     {
    //         label: "Friday Pickup", 
    //         value: "friday"
    //     },
    //     {
    //         label: "Saturday Pickup",
    //         value: "saturday"
    //     },
    //     {
    //         label: "Sunday Pickup",
    //         value: "sunday"
    //     }
    // ];


    //   function handleChange(e) {
    //     console.log("pickup selected!");
    //     setPickup({ pickup : e.target.value });
    //   }

    useEffect(() => {
        getMyCartItems()
    }, [])

    var localArr = []

    // puts local storage cart-item info into an array so we can pass it as props
    function getMyCartItems() {

        var keyArr = Object.keys(localStorage)
        for (var i = 0; i < keyArr.length; i++) {
            var value = JSON.parse(window.localStorage.getItem(keyArr[i]));
            localArr.push(value)
        }
        setCartItems(localArr)
    }
    console.log(cartItems)
    // stripe stuff to whisk the patron away
    const handleClick = async () => {
        var stripeID = StripeUtil.stripeCheckout(cartItems)
        console.log(stripeID)
    };

    return (
        <>
            <div className="container">
                {cartItems.map((cart, index) => {

                    return <CheckoutCard
                        id={cart.id}
                        key={index}
                        itemName={cart.itemName}
                        itemPriceCent={cart.itemPriceCent}
                        itemDesc={cart.itemDesc}
                        itemCategory={cart.itemCategory}
                        itemImg={cart.itemImg}
                        itemQuantity={cart.itemQuantity}
                        handleClick={handleClick} />

                })}
                <p className="pickup-text checkout-text"><small><strong>Pickup info: </strong>Orders receieved by Wednesday @ 11:59pm will be available for pickup Fri, Sat, & Sun between the hours of 12-4pm. Any orders received after this time will be availble the following week at the same times. Please use the contact form to inquire about special pickup options or to place orders for pickup more than one week in advance.</small></p>
                <div className="pickup-checkout">
                    {/* <select id="pickup-day" name="pickup-day">
                   {pickupOptions.map((option)=> (
            <option value={option.value}>{option.label}</option>
                   ))}
                   </select> */}
                    <br />
                    <button style={{ float: "right" }} className="btn btn-primary checkout-btn" onClick={() => handleClick()}>Checkout and Pay</button>
                </div>
            </div>
        </>
    )

}

export default CartCheckout;

{/* <select id="pickup-day" name="pickup-day">
<option value="friday">Friday @ SF Bakery Location: 12-4pm</option>
<option value="saturday">Saturday @ Speakeasy Brewery SF: 12-4pm</option>
<option value="sunday">Sunday @ Speakeasy Brewery SF: 12-4pm</option>
</select> */}

{/* <select id="pickup-day" name="pickup-day" value={pickup} onChange={handleChange} > */ }