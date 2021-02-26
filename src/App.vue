<script setup>
import Deadliner from "./components/Deadliner.vue";
import AddDeadliner from "./components/AddDeadliner.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const getDeadlinersDataFromServer = () => {
  store.dispatch("GET_DEADLINERS_FROM_API");
};
getDeadlinersDataFromServer();
const deadlinersHardCoded = computed(() => store.getters.DEADLINERS_HARD_CODED);

const removeDeadliner = (el) =>
  store.state.deadliners.filter((deadliner) => deadliner.id != el.id);

const addDeadliner = (deadliner) => {
  store.state.deadliners.push(deadliner);
  console.log("pushed", deadliner);
};
// сделать через мутацию
// const addDeadliner = (deadliner) => {
//   store.dispatch("ADD_DEADLINER_FROM_ADDING_FORM");
//   console.log("pushed", deadliner);
// };
const deadliners = computed(() => store.getters.DEADLINERS);
</script>

<template>
  <div class="app-container">
    <AddDeadliner @addDeadliner="addDeadliner" />
    <div class="deadliners-hard-coded-list-container">
      <Deadliner
        v-for="deadliner in deadlinersHardCoded"
        :key="deadliner.id"
        :deadlinerData="deadliner"
      />
    </div>
    <div class="deadliners-list-container">
      <Deadliner
        v-for="(deadliner, index) in deadliners"
        :key="index"
        :deadlinerData="deadliner"
        @removeDeadliner="removeDeadliner"
      />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.deadliners-hard-coded-list-container,
.deadliners-list-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
