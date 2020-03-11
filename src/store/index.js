import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    providers: [
      {
        title: "The New York Times",
        logoUrl: "nyt-logo.png",
        webUrl: "https://www.nytimes.com",
        api: {
          all: `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${
            process.env.VUE_APP_NYT_API_KEY
          }`
        }
      },
      {
        title: "The Guardian",
        logoUrl: "guardian-logo.jpg",
        webUrl: "https://www.theguardian.com/uk",
        api: {
          all: `https://content.guardianapis.com/search?api-key=${
            process.env.VUE_APP_GUARDIAN_API_KEY
          }`
        }
      }
    ],
    selected_providers: []
  },
  getters: {
    getProviders: state => state.providers,
    getSelectedProviders: state => state.selected_providers
  },
  mutations: {
    handleSelection: (state, title) => {
      if (state.selected_providers.includes(title)) {
        state.selected_providers.splice(title, 1);
      } else {
        state.selected_providers.push(title);
      }
    }
  },
  actions: {},
  modules: {}
});
