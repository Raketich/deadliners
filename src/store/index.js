import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    deadlinersHardCoded: [],
    deadliners: []
  },
  mutations: {
    SET_DEADLINERS_HARD_CODED(state, deadliners) {
      state.deadlinersHardCoded = deadliners;
    },
    SET_DEADLINER(state, deadliner) {
      state.deadliners.push(deadliner);
    }
  },
  actions: {
    async GET_DEADLINERS_FROM_API({ commit }) {
      const deadliners = await axios("deadlinersData.json", { method: "GET" });
      commit("SET_DEADLINERS_HARD_CODED", deadliners.data.deadliners);
    },
    ADD_DEADLINER_FROM_ADDING_FORM({ commit }, deadliner) {
      commit("SET_DEADLINER", deadliner);
      console.log("dispatched");
    }
  },
  getters: {
    DEADLINERS_HARD_CODED: (state) => {
      return state.deadlinersHardCoded;
    },
    DEADLINERS: (state) => {
      return state.deadliners;
    }
  }
});
