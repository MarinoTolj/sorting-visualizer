import React from "react";
import { useState, useEffect } from "react";
export default function ArrayList({ array, description, styles }) {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [arrayWidth, setArrayWidth] = useState("");
  useEffect(() => {
    /* console.log(deviceWidth >= 1150); */

    if (deviceWidth >= 1425) {
      setArrayWidth("9");
    } else if (deviceWidth >= 900) {
      setArrayWidth("5");
    }
  }, [window.innerWidth]);
  return (
    <div className={styles.arraycontainer}>
      {array.map((element, index) => (
        <div
          key={index}
          className={styles.arrayelement}
          style={{
            width: `3px`,
            height: `${element.value}px`,
            backgroundColor: `${element.color}`,
          }}
        ></div>
      ))}
      {description && (
        <div className={styles.sectioncontainer}>
          <section>{description}</section>
        </div>
      )}
    </div>
  );
}
