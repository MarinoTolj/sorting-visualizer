/* export default function BubbleSort(array) {
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].value > array[j + 1].value) {
        temp = array[j].value;
        array[j].value = array[j + 1].value;
        array[j + 1].value = temp;
      }
    }
  }
  return array;
} */

export default async function BubbleSort(array, setArray) {
  let temp = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].value > array[j + 1].value) {
        array[j].color = "red";
        array[j + 1].color = "red";

        temp = array[j].value;
        array[j].value = array[j + 1].value;
        array[j + 1].value = temp;

        setArray([...array]);
        await sleep(10);
      }
      array[j].color = "blue";
      array[j + 1].color = "blue";
    }
  }

  setArray([...array]);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
