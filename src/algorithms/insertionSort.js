import { sleep } from "../components/sortingVisualizer";
import { COLUMNS_COLOR } from "../components/sortingVisualizer";

export default function InsertionSort(array, setArray, animations, sortSpeed) {
  let temp = 0;

  let array2 = [...array];

  for (let i = 1; i < array2.length; i++) {
    let j = i;

    while (j > 0 && array2[j - 1].value > array2[j].value) {
      temp = array2[j];
      array2[j] = array2[j - 1];
      array2[j - 1] = temp;
      animations.push({ x: j, y: j - 1 });
      j--;
    }
  }

  Animation(array, setArray, animations, sortSpeed);
}

async function Animation(array, setArray, animations, sortSpeed) {
  let temp = 0;
  for (let i = 0; i < animations.length; i++) {
    array[animations[i].y].color = "red";

    temp = array[animations[i].x].value;
    array[animations[i].x].value = array[animations[i].y].value;
    array[animations[i].y].value = temp;

    setArray([...array]);
    await sleep(sortSpeed);

    array[animations[i].y].color = COLUMNS_COLOR;
  }
  setArray([...array]);
}
