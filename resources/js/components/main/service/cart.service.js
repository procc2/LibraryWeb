import axios from 'axios';

export const cartService = {
    addItem,
    removeItem,
    getItemByUser,
    removeAllItem,
    
};

function addItem(item) {
    return axios
    .post("/api/v1/carts", item)
    .then(function(resp) {
        return resp.data;
    })
    .catch(function(e) {
        console.log(e.response);
        if(e.response.status == 409){
            return false;
        }
    });
    

}

function getItemByUser(userId) {
            var items = axios.get("api/v1/carts/" + userId).then(res => res.data).catch(function(e) {
                return Promise.reject(e);
            });
            return items;
        }

function removeItem(id) {
    return axios
    .delete("/api/v1/carts/" + id)
    .then(function(resp) {
        console.log(resp);
    })
    .catch(function(e) {
        console.log(e.response);
    });
}

function removeAllItem(userId) {
    return axios
    .delete("/api/v1/userCarts", {
        data:{
            userId
        }
    })
    .then(function(resp) {
        console.log(resp);
    })
    .catch(function(e) {
        console.log(e.response);
    });
}
