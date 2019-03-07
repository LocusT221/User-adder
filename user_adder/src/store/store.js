import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

	state: {
		formSubmitted: false,
		addUserTriggered: false,
		activeComponent: 'userForm',
		userData: {},
		userArr: []
	},

	getters: {
		formSubmitted: state => {
			return state.formSubmitted
		},
		addUserTriggered: state => {
			return state.addUserTriggered
		},
		userData: state => {
			return state.userData
		},
		activeComponent: state => {
			return state.activeComponent
		},
		userArr: state => {
			return state.userArr
		}
	},

	mutations: {
		formSubmitted: (state, payload) => {
			state.formSubmitted = payload
		},
		addUserTriggered: (state, payload) => {
			state.addUserTriggered = true
			if (payload == false) {
				state.addUserTriggered = false
				state.activeComponent = 'userForm'
			};
		},
		activeComponent: (state, payload) => {
			state.activeComponent = payload
		},
		userData: (state, payload) => {
			state.userData = payload
			state.userArr.push(payload);
		}
	}

});