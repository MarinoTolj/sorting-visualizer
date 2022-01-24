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
  let array2 = [...array];
  let steps = [];

  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < array2.length; j++) {
      let num = getDigit(array2[j], i);
      steps.push({ x: j, y: -1 });
      if (num !== undefined) {
        buckets[num].push(array2[j]);
      }
    }

    let g = 0;
    for (let k = 0; k < 10; k++) {
      for (let l = 0; l < buckets[k].length; l++) {
        steps.push({ x: g, y: buckets[k][l].value });
        array2[g] = buckets[k][l];
        g++;
      }
    }
  }

  Vizualize(array, setArray, steps, sortSpeed, setIsRunning, setSteps);
}

async function Vizualize(
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

const getDigit = (num, digitsPlace) => {
  const stringNumber = String(num.value);
  let end = stringNumber.length - 1;
  const digit = stringNumber[end - digitsPlace];

  if (digit === undefined) return 0;
  else return digit;
};

const largestNum = (array) => {
  let largest = "0";

  array.forEach((num) => {
    const stringNumber = String(num.value);
    if (stringNumber.length > largest.length) largest = stringNumber;
  });

  return largest.length;
};
