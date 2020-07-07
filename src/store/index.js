import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import templates from "./modules/templates";

Vue.use(Vuex);

const state = {
  wuerstchen: 10
};
const mutations = {};
const actions = {};
const getters = {};
const modules = {
  auth,
  templates
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules
});
