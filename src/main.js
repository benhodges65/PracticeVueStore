import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      setTimeout(function () {
        context.commit('increase', { value: payload.value });
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter;
        if (finalCounter < 0) {
          return 0;
        } else if (finalCounter > 100) {
          return 100;
        } else {
          return finalCounter;
        }
      },
  },
};

const store = createStore({
    modules: {
        numbers: counterModule,
    },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    switchLogin(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
  getters: {
    getLoginStatus(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
