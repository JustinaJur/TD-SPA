import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issues: [
      {
        title: "button",
        description: "fix button",
        status: "open",
        trashed: false,
        id: "0",
      },
      {
        title: "button",
        description: "fix button blue",
        status: "closed",
        trashed: false,
        id: "1",
      },
      {
        title: "button",
        description: "fix yellow",
        status: "trashed",
        trashed: false,
        id: "2",
      },
      {
        title: "button",
        description: "fix navigation",
        status: "closed",
        trashed: false,
        id: "3",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
