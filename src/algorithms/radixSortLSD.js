import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default function RadixSortLSD(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  const maxLength = largestNum(array);
  let secondaryArray = [...array];
  let steps = [];

  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    //calculating where each values goes to what bucket and storing its index in x
    for (let j = 0; j < secondaryArray.length; j++) {
      let num = getDigit(secondaryArray[j], i);

      if (num !== undefined) {
        buckets[num].push(secondaryArray[j]);
        steps.push({ x: j, y: -1 });
      }
    }

    //reconstruction of array from buckets
    let g = 0;
    for (let k = 0; k < 10; k++) {
      for (let l = 0; l < buckets[k].length; l++) {
        steps.push({ x: g, y: buckets[k][l].value });
        secondaryArray[g] = buckets[k][l];
        g++;
      }
    }
  }

  Visualize(array, setArray, steps, sortSpeed, setIsRunning, setSteps);
}

async function Visualize(
  array,
  setArray,
  steps,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  setIsRunning(true);

  for (let i = 0; i < steps.length; i++) {
    array[steps[i].x].color = "red";

    if (steps[i].q !== -1) {
      array[steps[i].x].value = steps[i].y;
    }
    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;

    setSteps({ total: steps.length, done: i + 1 });
  }

  setIsRunning(false);
}

//function to get digit at certain digits place
const getDigit = (num, digitsPlace) => {
  const stringNumber = String(num.value);
  let end = stringNumber.length - 1;
  const digit = stringNumber[end - digitsPlace];

  if (digit === undefined) return 0;
  else return digit;
};

//number of digits of largest number in array
const largestNum = (array) => {
  let largest = "0";

  array.forEach((num) => {
    const stringNumber = String(num.value);
    if (stringNumber.length > largest.length) largest = stringNumber;
  });

  return largest.length;
};
