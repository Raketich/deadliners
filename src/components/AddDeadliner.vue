<script setup>
import { ref, defineEmit } from "vue";

const emit = defineEmit(["addDeadliner"]);

let title = ref("");
let endDate = ref("");
let category = ref("");

const onSubmit = (el) => {
  el.preventDefault();
  if (!title.value) {
    alert("You should at least add title and End Date");
  }

  const deadliner = {
    id: Math.floor(Math.random() * 10000),
    deadlinerName: title.value,
    endDate: endDate.value,
    category: category.value
  };

  emit("addDeadliner", deadliner);

  title.value = "";
  endDate.value = "";
  category.value = "";
};
</script>

<template>
  <div class="add-deadliner-container">
    <form @submit="onSubmit" class="add-deadliner-form">
      <div class="form-item">
        <label for="">Deadliner Title</label>
        <input
          type="text"
          name="deadliner-title"
          placeholder="Deadliner's name"
          v-model="title"
        />
      </div>
      <div class="form-item">
        <label for="">End Date</label>
        <input
          type="text"
          name="end-date"
          placeholder="End Date in format yyyy, mm, dd"
          v-model="endDate"
        />
      </div>
      <div class="form-item">
        <label for="">Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          v-model="category"
        />
      </div>

      <input type="submit" value="AddDeadliner" class="submit-button" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.add-deadliner-container {
  form {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 5px 0;
      input {
        padding: 10px 15px;
        border: 1px solid gray;
        border-radius: 10px;
      }
    }
    .submit-button {
      width: 50%;
      background: rgb(200, 255, 0);
      padding: 15px;
      border: none;
      border-radius: 20px;
      outline: none;
      margin-top: 15px;
      transition: 250ms transform ease;
      font-weight: 700;
      &:hover {
        cursor: pointer;
        background: rgb(158, 255, 61);
      }
      &:active {
        transform: scale(0.98);
      }
    }
  }
}
</style>
