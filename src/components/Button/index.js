import React from "react";
import styles from "./button.module.css";

export function Button({ href = "#", text = 'hello button' }) {
  return <a className={`${styles.btn} ${styles.md}`} href={href}>{text}</a>;
}
