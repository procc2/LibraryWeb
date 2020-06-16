import { userService } from '../../service/user.service';
import { router } from "../../../../router";

const token = localStorage.getItem('token');

const state = { status: {}, user: null };

const actions = {
    async login({ dispatch, commit }, { email, password }) {
        commit('loginRequest', { email });
    
        await userService.login(email, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    // router.push('/');
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ dispatch, commit }) {
        userService.logout();
        dispatch('cart/removeAllProduct', null, { root: true });
        commit('logout');
    },
    async getLoginState({ commit }){
        await userService.getUserByToken(token)
        .then(
            user => {
                commit('loginSuccess', user);
            }
        )
    },
    async register({ dispatch, commit }, user) {
        commit('registerRequest', user);
    
        await userService.register(user)
            .then(
                user => {
                    commit('registerSuccess', user);
                    setTimeout(() => {
                        // hiển thị message thành công sau redirect sang trang 
                        dispatch('alert/success', 'Registration successful', { root: true });
                    })
                },
                error => {
                    commit('registerFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    async update({},user){
        return await userService.update(user)
        .then(
            user => user.data
        );
    },
    async updatePassword({},data){
        return await userService.updatePassword(data)
        .then(
            res => res
        );
    },
    async resetPasswordRequest({},email){
        return await userService.resetRequest(email);        
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
        console.log(state);
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state, user) {
        state.status = { registering: true };
    },
    registerSuccess(state, user) {
        state.status = { registered : true};
    },
    registerFailure(state, error) {
        state.status = {};
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};