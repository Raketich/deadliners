import { ref } from "vue";
import { customPad } from "../composables/usePad";

export const beautifyDate = (date) => {
  const newDate = ref(new Date(Date.parse(date)));
  const day = ref(customPad(newDate.value.getDate()));
  const month = ref(customPad(newDate.value.getMonth() + 1));
  const year = ref(customPad(newDate.value.getFullYear()));
  const beautifiedDate = `${day.value}.${month.value}.${year.value}`;

  return beautifiedDate;
};
