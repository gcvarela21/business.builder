import axios from "axios";

var axiosCalls = {
    // Gets all items
    getAllItems: function () {
        return axios.get("/api/item");
    },

    getItem: function (id) {
        return axios.get("/api/itemid/" + id);
    },

    getCategory: function (itemCategory) {
        return axios.get("/api/item/" + itemCategory);
    },

    deleteItem: function (itemName) {
        console.log("delete item API.js in use")
        return axios.delete("/api/item", itemName);
    },
    removeItem: function (id) {

        return axios.delete("/api/itemid/" + id);
    },
    updateItem: function (itemName) {
        // return axios.put("/api/itemid/:id", id);
        return axios.put("/api/itemNombre/:itemName", itemName);
    },

    createItem: function (itemData) {
        return axios.post("/api/item", itemData);
    },

    createOrder: function (itemData) {
        return axios.post("/api/order", itemData);
    },

    createOrderItem: function (itemData) {
        return axios.post("/api/orderItem", itemData);
    }

};

export default axiosCalls;