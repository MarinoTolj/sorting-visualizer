import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function RadixSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning
) {
  const maxLength = largestNum(array);

  setIsRunning(true);
  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < array.length; j++) {
      let num = getDigit(array[j], i, maxLength);

      if (num !== undefined) {
        buckets[num].push(array[j]);
        array[j].color = "red";
        setArray([...array]);
        await sleep(sortSpeed);
        array[j].color = COLUMNS_COLOR;
      }
    }

    console.log(buckets);

    /* array = buckets.flat(); */
    let g = 0;
    for (let k = 0; k < 10; k++) {
      for (let l = 0; l < buckets[k].length; l++) {
        array[g] = buckets[k][l];
        array[g].color = "red";
        setArray([...array]);
        await sleep(sortSpeed);
        array[g].color = COLUMNS_COLOR;
        g++;
      }
    }

    setArray([...array]);
    await sleep(sortSpeed);
  }

  setArray([...array]);
  setIsRunning(false);
}

const getDigit = (num, digitsPlace, maxLength) => {
  const stringNumber = String(num.value).split("");
  while (stringNumber.length < maxLength) {
    stringNumber.unshift("0");
  }
  const temp = stringNumber.join("");

  const digit = temp[digitsPlace];
  /* console.log(temp, digit, digitsPlace); */

  return digit;
};

const largestNum = (array) => {
  let largest = "0";

  array.forEach((num) => {
    const stringNumber = String(num.value);
    if (stringNumber.length > largest.length) largest = stringNumber;
  });

  return largest.length;
};
