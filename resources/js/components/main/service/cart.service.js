import axios from 'axios';

export const cartService = {
    addItem,
    removeItem,
    getItemByUser
    
};

function addItem(item) {
    return axios
    .post("/api/v1/carts", item)
    .then(function(resp) {
        return resp.data;
        app.$modal.show('borrowRequestSuccess');
    })
    .catch(function(e) {
        console.log(e.response);
        if(e.response.status == 409){
            app.$modal.show('error')
        }
    });
    

    // fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // addItem thành công nếu có một token jwt trong response
    //         if (user.token) {
    //             // lưu dữ liệu user và token jwt vào local storage để giữ user được log in trong page
    //             localStorage.setItem('user', JSON.stringify(user));
    //         }

    //         return user;
    //     });

}

function getItemByUser(userId) {
            var items = axios.get("api/v1/carts/" + userId).then(res => res.data).catch(function(e) {
                return Promise.reject(e);
            });
            return items;
        }

function removeItem(id) {
    // xoá user từ local storage để log out
    return axios
    .delete("/api/v1/carts/" + id)
    .then(function(resp) {
        console.log(resp);
    })
    .catch(function(e) {
        console.log(e.response);
    });
}
