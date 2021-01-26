import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const ISSUES = "issues";
export const ADD_ISSUE = "addIssue";
export const UPDATE_ISSUE = "updateIssue";

const state = {
  issues: [],
};

export const actions = {
  [ADD_ISSUE]({ commit }, issue) {
    commit(ADD_ISSUE, issue);
  },
  [UPDATE_ISSUE]({ commit }, issue) {
    commit(UPDATE_ISSUE, issue);
  },
};

export const mutations = {
  [ADD_ISSUE](state, payload) {
    state.issues.push(payload);
  },
  [UPDATE_ISSUE](state, payload) {
    const issue = state.issues.find((issue) => issue.title === payload.title);
    Object.assign(issue, payload);
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [createPersistedState()],
});
