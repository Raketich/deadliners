import { customPad } from "../composables/usePad";
import { ref } from "vue";

export const getTimeRemaining = (endDate) => {
  const timeDifference = () => {
    return Date.parse(endDate) - Date.parse(new Date().toString());
  };

  const seconds = Number(customPad(Math.floor((timeDifference() / 1000) % 60)));
  const minutes = Number(
    customPad(Math.floor((timeDifference() / 1000 / 60) % 60))
  );
  const hours = Number(
    customPad(Math.floor((timeDifference() / (1000 * 60 * 60)) % 24))
  );
  const days = Number(
    customPad(Math.floor(timeDifference() / (1000 * 60 * 60 * 24)))
  );

  // const result = ref(`${days}д : ${hours}ч : ${minutes}м : ${seconds}c`);

  // return result;

  return `${days}д : ${hours}ч : ${minutes}м : ${seconds}c`;
};
