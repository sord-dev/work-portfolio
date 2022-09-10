import React from "react";
import styles from "./loading.module.css";

export const LoadingSpinner = ({ message }) => {
  return (
    <div className={styles.spinner_container}>
      <h2>{message}</h2>
    </div>
  );
};
