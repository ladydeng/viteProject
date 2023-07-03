import { createStore  } from "vuex"

const store: any = createStore({
    state:{
        token:""
    },

    getters:{
        token(state){
            if(state.token){
                return state.token
            }else{
                return localStorage.getItem("token") || ''
            } 
        }
    },
    mutations:{
        setToken(state, token){
            state.token = token
        }
    }
})

export default store
