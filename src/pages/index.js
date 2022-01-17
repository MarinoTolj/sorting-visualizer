import React from "react";
import SortingVisualizer from "../components/sortingVisualizer";
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "../components/toggle";

export default function index() {
  /* const [description, setDescription] = useState(""); */
  //https://www.w3schools.com/howto/howto_css_switch.asp
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Sorting Visualizer
      </h1>
      <Toggle />
      <SortingVisualizer />
      <SortingVisualizer />
    </div>
  );
}
