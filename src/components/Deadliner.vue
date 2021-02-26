<script setup>
import { defineProps, defineEmit, ref, onMounted, computed } from "vue";
import { beautifyDate } from "../composables/useBeautifyDate";
import { getTimeRemaining } from "../composables/useGetTimeRemainig";

const props = defineProps({
  deadlinerData: {
    type: Object
  }
});

const emit = defineEmit(["removeDeadliner"]);

const endDate = ref(beautifyDate(props.deadlinerData.endDate));

const timeDifference = computed(() => {
  return (
    Date.parse(props.deadlinerData.endDate) - Date.parse(new Date().toString())
  );
});

const timeToEnd = ref(getTimeRemaining(props.deadlinerData.endDate));
onMounted(() => {
  setInterval(() => {
    timeToEnd.value = getTimeRemaining(props.deadlinerData.endDate);
  }, 1000);
});
</script>

<template>
  <div class="deadliner-container" @dblclick="removeDeadliner">
    <div class="deadliner__name">{{ deadlinerData.deadlinerName }}</div>
    <div class="deadliner__end-date">{{ endDate }}</div>
    <div class="deadliner__time-to-end" v-if="timeDifference > 0">
      {{ timeToEnd }}
    </div>
    <div class="deadliner__time-to-end" v-else>You fucked up</div>
  </div>
</template>

<style lang="scss" scoped>
.deadliner-container {
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid rgb(191, 191, 191);
  border-radius: 15px;
  margin: 15px;
  background: rgba(255, 181, 70, 0.726);
}
</style>
