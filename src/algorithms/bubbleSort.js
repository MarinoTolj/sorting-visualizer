import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

//optimized bubble sort which checks if array is already sorted
export default function BubbleSort(array, setArray, animations, sortSpeed) {
  let temp = 0;
  //checks if any 2 elements are swapped, if it is true do while loop continues, otherwise loop stops because array is sorted
  let swapped = false;
  let array2 = [...array];

  do {
    swapped = false;
    for (let j = 0; j < array2.length - 1; j++) {
      if (array2[j].value > array2[j + 1].value) {
        //changing color of 2 selected values and swaping them
        /* array[j].color = "red";
        array[j + 1].color = "red"; */

        temp = array2[j];
        array2[j] = array2[j + 1];
        array2[j + 1] = temp;
        animations.push({ x: j, y: j + 1 });

        swapped = true;
        //updates the state of array and re-renders it.
        /* setArray([...array]);
        await sleep(sortSpeed); */
        //changes colors back to original
        /* array[j].color = COLUMNS_COLOR;
        array[j + 1].color = COLUMNS_COLOR; */
      }
    }
  } while (swapped);

  Animation(array, setArray, animations, sortSpeed);
}

async function Animation(array, setArray, animations, sortSpeed) {
  let temp = 0;
  for (let i = 0; i < animations.length; i++) {
    array[animations[i].x].color = "red";
    array[animations[i].y].color = "red";

    temp = array[animations[i].x].value;
    array[animations[i].x].value = array[animations[i].y].value;
    array[animations[i].y].value = temp;

    setArray([...array]);
    await sleep(sortSpeed);
    array[animations[i].x].color = COLUMNS_COLOR;
    array[animations[i].y].color = COLUMNS_COLOR;
  }
  setArray([...array]);
}
