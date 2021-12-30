import { COLOR_ARRAY } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function QuickSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  const MAX_LEVELS = 1000;
  let piv,
    i = 0,
    L,
    R;
  let beg = [],
    end = [];
  const n = array.length;
  beg[0] = 0;
  end[0] = n;
  let auxiliaryArray = [...array];

  setIsRunning(true);

  while (i >= 0) {
    L = beg[i];
    R = end[i] - 1;

    if (L < R) {
      piv = auxiliaryArray[L];

      if (i == MAX_LEVELS - 1) return;
      while (L < R) {
        while (auxiliaryArray[R].value >= piv.value && L < R) {
          auxiliaryArray[L].color = "red";
          auxiliaryArray[R].color = "red";

          setArray([...auxiliaryArray]);
          await sleep(sortSpeed);
          auxiliaryArray[L].color = COLOR_ARRAY;
          auxiliaryArray[R].color = COLOR_ARRAY;
          R--;
        }
        if (L < R) {
          auxiliaryArray[L++] = auxiliaryArray[R];
        }
        while (auxiliaryArray[L].value <= piv.value && L < R) {
          auxiliaryArray[L].color = "red";
          auxiliaryArray[R].color = "red";

          setArray([...auxiliaryArray]);
          await sleep(sortSpeed);
          auxiliaryArray[L].color = COLOR_ARRAY;
          auxiliaryArray[R].color = COLOR_ARRAY;
          L++;
        }
        if (L < R) {
          auxiliaryArray[R--] = auxiliaryArray[L];
        }
      }
      auxiliaryArray[L] = piv;
      beg[i + 1] = L + 1;
      end[i + 1] = end[i];
      end[i++] = L;
    } else {
      i--;
    }
  }

  setIsRunning(false);
  setArray([...auxiliaryArray]);
}
