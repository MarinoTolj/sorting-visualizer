import React from "react";
import { useState, useEffect } from "react";
import * as styles from "../styles/sortingVisualizer.module.css";

export default function ArrayList({ array, description, arraySize }) {
  const [arrayWidth, setArrayWidth] = useState(3);

  useEffect(() => {
    if (window.innerWidth > 1280) {
      setArrayWidth((1280 - arraySize - 10) / arraySize);
    } else {
      setArrayWidth((window.innerWidth - arraySize - 20) / arraySize);
    }
  }, [arraySize, window.innerWidth]);

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
      {/* {description && (
        <section className={styles.sectioncontainer}>{description}</section>
      )} */}
    </div>
  );
}
