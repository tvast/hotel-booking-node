import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
 	state: {
    flavor: '',
    pricing :'',
    chats : null,
    handle : "",
    dataCitySearch:[],
    dataCitySearchArrival:[]
  },
  mutations: {
    change(state, flavor) {
      state.flavor = flavor
    }
    ,
    changePricing (state, pricing) {
    state.pricing = pricing
    },
        SET_CHAT : (state,payload) => {
      state.chats = payload;
    },
    ADD_CHAT : (state,payload) => {
      state.chats.push(payload);
    },
    SET_HANDLE : (state,payload) => {
      state.handle = payload;
    },
    dataCitySearchMute (state, dataCitySearch){
      state.dataCitySearch=dataCitySearch
    },
    dataCitySearchArrival (state, dataCitySearchArrival){
      state.dataCitySearchArrival=dataCitySearchArrival
    },
  },
  getters: {
    flavor: state => state.flavor,
    pricing: state => state.pricing,
     CHATS : state => {
      return state.chats
    },
    HANDLE : state => {
      return state.handle
    },dataCitySearch : state => {
      return state.dataCitySearch
    },dataCitySearchArrival : state => {
      return state.dataCitySearchArrival
    },
    

  },

})
