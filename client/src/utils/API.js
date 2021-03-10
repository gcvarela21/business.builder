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
        console.log("delete item API.js bro!")
        return axios.delete("/api/item", itemName);
    },
    removeItem: function (id) {

        return axios.delete("/api/itemid/" + id);
    },

    createItem: function (itemData) {
        return axios.post("/api/item", itemData);
    },

    createOrder: function (itemData) {
        return axios.post("/api/order", itemData);
    },

    createOrderItem: function (itemData) {
        return axios.post("/api/orderItem", itemData);
    },

    loginAdmin: function (adminData) {
        // console.log("axios")
        return axios.post("/api/user/login", adminData)
    },

    adminCheck: function () {
        return axios.get("/api/user/login")
    }

};

export default axiosCalls;