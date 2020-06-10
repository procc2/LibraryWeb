import { authHeader } from '../helper/auth-header';
import axios from 'axios';

export const userService = {
    login,
    logout,
    getUserByToken,
    register,
    // getAll,
    // getById,
    // update,
    // delete: _delete
};

async function login(email, password) {
    var user = {
        email,
        password
    }
    return await axios
    .post("api/auth/login", user, {
        headers: {
            Accept: "application/json"
        },
        // validateStatus: function(status) {
        //     return status < 500;
        // }
    })
    .then(async function(res)  {
        if(res.status == 200){
        const token = res.data.access_token;
        var res = await getUserByToken(token).then(user =>{
            localStorage.setItem('token', token);
            // console.log(user);
            return user;
        });
        
        return res;
        }
        // else if (res.status ==401 ){
        //     console.log(res);
        // }else{
        //     console.log("error " + res.status );
        // }
    })
    .catch(function(error) {
        return Promise.reject(error);
    });
    

    // fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // login thành công nếu có một token jwt trong response
    //         if (user.token) {
    //             // lưu dữ liệu user và token jwt vào local storage để giữ user được log in trong page
    //             localStorage.setItem('user', JSON.stringify(user));
    //         }

    //         return user;
    //     });

}

function getUserByToken(token) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json"
                }
            };
            var user = axios.get("api/auth/user", config).then(res => res.data).catch(function(e) {
                return Promise.reject(e);
            });
            return user;
        }

function logout() {
    // xoá user từ local storage để log out
    localStorage.removeItem('token');
}

async function register(user) {
    return await axios.post("api/auth/signup", user).then(res => res.data);
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }


// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
// }

// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

// function handleResponse(response) {
    
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // tự động logout nếu response 401 được trả về từ api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (response.data) || response.statusText;
//             return Promise.reject(error);
//         }

//         return response;
    
// }