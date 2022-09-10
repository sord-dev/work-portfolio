import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";

export const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            <a className={styles.navlink}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className={styles.navlink}>Projects</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/feed"><a className={styles.navlink}>Feed</a></Link>
        </li> */}
        <li>
          <Link href="/about">
            <a className={styles.navlink}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
