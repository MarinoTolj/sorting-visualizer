import React from "react";
import SortingVisualizer from "../components/sortingVisualizer";
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "../components/toggle";
import { useState, useEffect } from "react";

export default function Index() {
  const [toggle, setToggle] = useState(false);

  /* useEffect(() => {
    console.log(toggle);
  }, [toggle]); */

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Sorting Visualizer
      </h1>
      <Toggle setToggle={setToggle} />
      <SortingVisualizer />
      {toggle && <SortingVisualizer />}
    </div>
  );
}
