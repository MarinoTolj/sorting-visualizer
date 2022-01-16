import React from "react";
import { useState, useEffect } from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import useResizeObserver from "use-resize-observer";

export default function ArrayList({ array, description, arraySize }) {
  const { ref, width = 1, height = 1 } = useResizeObserver();
  const [arrayWidth, setArrayWidth] = useState(3);

  useEffect(() => {
    /* console.log(window.innerWidth); */
    if (window.innerWidth > 1280) {
      setArrayWidth((1280 - arraySize - 10) / arraySize);
    } else {
      setArrayWidth((window.innerWidth - arraySize - 10) / arraySize);
    }
  }, [arraySize, window.innerWidth]);

  return (
    <div ref={ref} className={styles.arraycontainer}>
      {array.map((element, index) => (
        <div
          key={index}
          className={styles.arrayelement}
          style={{
            width: `${arrayWidth}px`,
            height: `${element.value}px`,
            backgroundColor: `${element.color}`,
          }}
        >
          {/* {index} */}
        </div>
      ))}
      {description && (
        <section className={styles.sectioncontainer}>{description}</section>
      )}
    </div>
  );
}
