 
import axios from "axios";


export function getProData(id) {
    return axios.get(" https://myeasykart.codeyogi.io/product/" + id).then(function (response) {
        return response.data;
    });

}

export function getList(sortBy ,query,page,sortType) {
    let params={};
    if (sortBy) {
        params.sortBy = sortBy;
    }
    if(query){
        params.search = query;
    }

    if(page){
        params.page = page;
    }
    if(sortType){
        params.sortType=sortType;
    }
    // if(items_per_page|| page){
    //     params.skip=(page-1)*items_per_page
       
    //     params.limit=items_per_page
    //     }

console.log("sortby",sortBy);
console.log("page",page);
    return axios.get("https://myeasykart.codeyogi.io/products",
        {
            params,
            headers:{
                Authorization: localStorage.getItem("token"),
            },


    })
    .then(function (response) {
        return response.data;
        
    });

}