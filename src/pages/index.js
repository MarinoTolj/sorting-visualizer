import React from "react";
import Header from "../components/header";
import SortingVisualizer from "../components/sortingVisualizer";
import * as styles from "../styles/home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function index() {
  return (
    <div className={styles.header}>
      {/* Sorting Visualizer */}
      <Header />
      <SortingVisualizer />
    </div>
  );
}
