import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./layout.module.css";

export const Nav = () => {
 
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/feed">Feed</Link>
        </li>
      </ul>
    </nav>
  );
};
