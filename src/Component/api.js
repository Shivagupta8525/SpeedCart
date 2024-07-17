 
import axios from "axios";


export function getProData(id) {
    return axios.get("https://dummyjson.com/products/" + id).then(function (response) {
        return response.data;
    });

}

export function getList() {
    return axios.get("https://dummyjson.com/products").then(function (response) {
        return response.data.products;

    });

}