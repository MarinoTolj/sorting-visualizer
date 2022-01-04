import { COLOR_ARRAY } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function RadixSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  const maxLength = largestNum(array);

  setIsRunning(true);
  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < array.length; j++) {
      let num = getDigit(array[j], i);

      if (num !== undefined) {
        buckets[num].push(array[j]);
        array[j].color = "red";
        setArray([...array]);
        await sleep(sortSpeed);
        array[j].color = COLOR_ARRAY;
      }
    }

    /* array = buckets.flat(); */
    let g = 0;
    for (let k = 0; k < 10; k++) {
      for (let l = 0; l < buckets[k].length; l++) {
        array[g] = buckets[k][l];
        array[g].color = "red";
        setArray([...array]);
        await sleep(sortSpeed);
        array[g].color = COLOR_ARRAY;
        g++;
      }
    }

    setArray([...array]);
    await sleep(sortSpeed);
  }

  setArray([...array]);
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
