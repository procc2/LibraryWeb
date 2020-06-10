import { cartService } from '../../service/cart.service';

// const cartItems = localStorage.getItem('cart');

const state = { items: [], };

const getters = {
    cartItems: (state, rootState) => {
      return state.items.map(({ id, quantity }) => {
        const product = rootState.products.all.find(product => product.id === id)
        return {
          title: product.title,
          price: product.price,
          quantity
        }
      })
    }
}

const actions = {
    addProductToCart ({ state, commit }, {cartDetail,book}) {
        //TODO: Them inventory cho book
        console.log(cartDetail);
        if (book.inventory || 1) {
          const cartItem = state.items.find(item => item.book_id === book.book_id)
          if (!cartItem) {
            commit('pushProductToCart',{item : book});
            return cartService.addItem(cartDetail).then((res)=>{
              return res;
            })
            

          }else{
            return false;
          } 
          // remove 1 item from stock
        //   commit('products/decrementProductInventory', { id: product.id }, { root: true })
        }
      },
    removeProduct({ commit },item) {
        cartService.removeItem(item.cart.id);
        commit('removeItemFromCart',item);
    },
    removeAllProduct({commit}){
      commit('setCartItems',[])
    }
    ,
    async getUserCart({ commit, rootState }){
        await cartService.getItemByUser(rootState.account.user.user_id)
        .then(
            items => {
              console.log(items);
                commit('setCartItems', items);
            }
        )
    }
    // register({ dispatch, commit }, user) {
    //     commit('registerRequest', user);
    
    //     cartService.register(user)
    //         .then(
    //             user => {
    //                 commit('registerSuccess', user);
    //                 router.push('/login');
    //                 setTimeout(() => {
    //                     // hiển thị message thành công sau redirect sang trang 
    //                     dispatch('alert/success', 'Registration successful', { root: true });
    //                 })
    //             },
    //             error => {
    //                 commit('registerFailure', error);
    //                 dispatch('alert/error', error, { root: true });
    //             }
    //         );
    // }
};

const mutations = {
    pushProductToCart (state, { item }) {
        state.items.push(item)
        console.log(state.items)
      },
    
      incrementItemQuantity (state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
      },
    
      setCartItems (state, items) {
        console.log(items);
        state.items = items
        console.log(state);
      },
    
      removeItemFromCart (state, item) {
        state.items.splice(state.items.indexOf(item),1);
      }
};

export const cart = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }