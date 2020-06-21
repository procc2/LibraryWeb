import { authHeader } from "../helper/auth-header";
import axios from "axios";

export const userService = {
    login,
    logout,
    getUserByToken,
    register,
    update,
    updatePassword,
    resetRequest,
};

async function login(email, password) {
    var user = {
        email,
        password
    };
    return await axios
        .post("api/auth/login", user, {
            withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        })
        .then(async function(res) {
            if (res.status == 200) {
                console.log(res);
                var res = await getUserByToken().then(user => {
                    // localStorage.setItem("token", token);
                    // console.log(user);
                    return user;
                });
                return res;
            }
        })
        .catch(function(error) {
            return Promise.reject(error);
        });
}

function getUserByToken() {
    const config = {
        withCredentials: true,
        // headers: {
        //     Authorization: `Bearer ${token}`,
        //     Accept: "application/json"
        // }
    };
    var user = axios
        .get("api/auth/user", config)
        .then(res => res.data)
        .catch(function(e) {
            return Promise.reject(e);
        });
    return user;
}

function logout() {
    // xoá user từ local storage để log out
    localStorage.removeItem("token");
    axios
        .get("api/auth/logout", {
            withCredentials: true,
        })
        .then(res => res.data)
        .catch(function(e) {
            return Promise.reject(e);
        });
}

async function register(user) {
    return await axios.post("api/auth/signup", user).then(res => res.data);
}

async function update(user) {
    return await axios
        .put("api/v1/users/" + user.user_id, user)
        .then(res => res.data);
}

async function resetRequest(email) {
    return await axios.post("api/reset-password", email).then(res => res).catch(e => e);
}

async function updatePassword(data) {
    return await axios.put("api/v1/users", data).then(res => res).catch(e => e.response);
}