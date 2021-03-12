## Business Builder
  ![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)

This is a full-stack React application built for San Francisco-based baker Danielle M. Estrella. She specializes in modern and artistic wedding cakes as well as made-to-order cookies and treats. The application integrates e-commerce elements to give the site full functionality as a business development tool. There are two sides to the application, one for the shopper and one for the business owner.  Guests to the site may view the complete menu, place orders, view her photo gallery, and visit her About Me page. Cart data persistence is accomplished using local storage and payments are processed using the Stripe payment API. Her menu is saved in a Sequelize database and is easily editable using the admin login which allows her to update, delete and create new menu items. 

### [Visit Deployed Site](https://danielle-m-estrella.herokuapp.com/)

### **Guest Shopper Experience:**
![Alt Text](/assets/danielle-showcase.gif)

### **Guest Shopper Experience:**
![Alt Text](/assets/admin_backEnd.gif)

## **Built With**
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Bootstrap](https://getbootstrap.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://www.javascript.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [react](https://reactjs.org/)
* [react-dom](https://reactjs.org/docs/react-dom.html)
* [react-scripts](https://www.npmjs.com/package/react-scripts)
* [react-router-dom](https://reactrouter.com/web/guides/quick-start)
* [axios](https://www.npmjs.com/package/axios)
* [Web Vitals](https://web.dev/vitals/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Express](https://www.npmjs.com/package/express)
* [Concurrently](https://www.npmjs.com/package/concurrently)
* [if-env](https://www.npmjs.com/package/if-env)
* [Sequelize](https://sequelize.org/)
* [MySQLWorkbench](https://www.mysql.com/products/workbench/)
* [Stripe](https://stripe.com/)
* [Notie.js](https://github.com/jaredreich/notie)
* [heroku](https://dashboard.heroku.com/)
______________________________________________________________________________
#### **Main Team Roles**

* Gloria Varela: Client-Developer Liason, Design, Frontend, Admin Backend, Styling
* Peter Ting: Frontend, Database Backend, Styling
* Pamela Gutierrez: Copywriting, Design, Frontend, Backend, Styling

_____________
#### **Code Snippet**

When the page is loaded getMyCartItems is called which parses out the objects stored in the array and then puts it in a new array and then the cartItems state is updated with setCartItems. cartItems is then used to show the user their current cart contents.

```javascript
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
```

This function maps though cartItems so we can return the object for each item in the array of cartItems. The information we extract is the item ID, price, description, category, image URL, desired quantity and a handleClick function which sends the user to the stripe payment page so they can make a purchase!

```javascript
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

```
In the main folder of:

business.builder/client/src/components/NewItem/index.js

We created function NewItem() to be export default Newitem;
It is used as a stateless component that renders a form with a drop-down menu to select predefined categories that correspond with the Shop. The input fileds are paried with a corresponing lablels and id tags for future reference.
At the bottom of the card is a button with an onClick event with a function to be triggered.

```html
 <div className="col-6 d-flex justify-content-center">
     <button id="Create" className="btn btn-secondary" onClick={(event) => { event.preventDefault(); createITEM();}} >Create</button>
 </div>
```
The function NewItem() is created to assemble an object that sets the string by getting an element by id and capuring the value in the input field.
The Object is then passed into the API call to Axios Post.
```javascript
function NewItem() {
    function createITEM() {
        console.log("creating Item");
        let itemData = {
            itemName: document.getElementById("c-Name").value,
            itemDesc: document.getElementById("c-Desc").value,
            itemPrice: document.getElementById("c-Price").value,
            itemImg: document.getElementById("c-Image").value,
            itemCategory: document.getElementById("c-Category").value
        }
        console.log(itemData);
        API.createItem(itemData)
    }
```
_____________________________________________________________________

### **Author Links**

**Pamela Gutierrez**
- [Link to Portfolio Site](https://pamela-gutierrez.github.io/updated-portfolio/)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)

**Peter Ting**
- [Link to Portfolio Site](https://portfolio-mk3.herokuapp.com/)
- [Link to Github](https://github.com/Pting1995) 
- [Link to LinkedIn](https://www.linkedin.com/in/pting002/)

**Gloria C Varela**
- [GitHub Profile Page](https://github.com/gcvarela21)
- [Web Developer Portfoio Website](https://gcvarela21.github.io/glo.digital/)
- [Interactive Design Portfolio Website](https://www.glo.digital/)
- [LinkedIn](https://www.linkedin.com/in/glovarela/)
  _____________________________________________________________________
### License
This project is licensed under: ![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)