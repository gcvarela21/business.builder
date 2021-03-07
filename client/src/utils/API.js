import axios from "axios";

var axiosCalls = {
    // Gets all items
    getAllItems: function () {
        return axios.get("/api/item");
    },

    getItem: function (id) {
        return axios.get("/api/item/" + id);
    },

    getCategory: function (itemCategory) {
        return axios.get("/api/item/" + itemCategory);
    },

    deleteItem: function (id) {
        return axios.delete("/api/item/" + id);
    },

    createItem: function (itemData) {
        return axios.post("/api/item", itemData);
    }
};

export default axiosCalls;