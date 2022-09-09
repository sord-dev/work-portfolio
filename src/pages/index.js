import Head from "next/head";
import styles from "../styles/Home.module.css";

import { SocialList } from "../components";
import { SOCIAL_MEDIA_LINKS } from "../data";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stefan Syrett - Front End Devloper</title>
        <meta
          name="description"
          content="Front end web developer based in London, UK."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.title}>
        <h1>Stefan Syrett</h1>
        <p>front end developer</p>
      </div>

      <SocialList links={SOCIAL_MEDIA_LINKS} />
    </div>
  );
}
