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

    deleteItem: function (id) {
        return axios.delete("/api/itemid/" + id);
    },

    createItem: function (itemData) {
        return axios.post("/api/item", itemData);
    },

    createPatron: function (itemData) {
        return axios.post("/api/patron", itemData);
    },

    createOrder: function (itemData) {
        return axios.post("/api/patronItem", itemData);
    }

};

export default axiosCalls;