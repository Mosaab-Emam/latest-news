import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    providers: [
      {
        title: "The New York Times",
        logoUrl:
          "data:image/png;base64,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",
        api: {
          all: `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${
            process.env.VUE_APP_NYT_API_KEY
          }`
        }
      },
      {
        title: "The Guardian",
        logoUrl:
          "https://events.sustainablebrands.com/sb19det/wp-content/uploads/2019/04/logo-theguardian-500x500-350x350.png",
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
