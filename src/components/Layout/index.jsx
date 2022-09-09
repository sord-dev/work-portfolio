import React from "react";
import { Nav } from "./Nav";
import { SocialList } from "../SocialList";

import { useRouter } from "next/router";
import { SOCIAL_MEDIA_LINKS } from "../../data";
import styles from './layout.module.css'

export const Layout = ({ children }) => {
  const router = useRouter();

  const isHomepage = router.asPath === "/";
  return (
    <div className={styles.layout}>
      <Nav />
      {children}
      {!isHomepage && <SocialList links={SOCIAL_MEDIA_LINKS} />}
    </div>
  );
};
