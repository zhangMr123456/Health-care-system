import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		//要存储的状态值
	},
	
	getters:{
		getOuterVisible: state =>{
			return state.outerVisible 
		},
	},
	mutations:{
		//只允许在这进行值的更改
	},
	actions:{
		
	},
	
});
 
