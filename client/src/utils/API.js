import axios from "axios";

export default {
    // Gets all items
    getAllItems: function () {
        return axios.get("/api/item");
    },

    getCategory: function (itemCategory) {
        console.log("API")
        return axios.get("/api/item/" + itemCategory);
    },

    deleteItem: function (id) {
        return axios.delete("/api/item/" + id);
    },

    createItem: function (itemData) {
        return axios.post("/api/item", itemData);
    }
};