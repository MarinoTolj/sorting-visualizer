import React from "react";
import { useState, useEffect } from "react";
import * as styles from "../styles/sortingVisualizer.module.css";

export default function ArrayList({ array, arraySize }) {
  const [arrayWidth, setArrayWidth] = useState(3);

  useEffect(() => {
    setArrayWidth((1280 - arraySize - 10) / arraySize);
  }, [arraySize]);

  return (
    <div className={styles.arraycontainer}>
      {array.map((element, index) => (
        <div
          key={index}
          className={styles.arrayelement}
          style={{
            width: `${arrayWidth}px`,
            height: `${element.value}px`,
            backgroundColor: `${element.color}`,
          }}
        ></div>
      ))}
    </div>
  );
}
