import { createStore  } from "vuex"

const store: any = createStore({
    state:{
        token:"0120"
    },

    getters:{
        token(state){
            return state.token
        }
    }
})

export default store
