import Head from "next/head";
import React from "react";

//COMPONENTS
import { ItemList } from "../components/ItemList";

//STYLES
import styles from "../styles/About.module.css";

//DATA
import { ABOUT_INERESTS_LIST, ABOUT_SKILLS_LIST } from "../data";

const About = () => {
  return (
    <div className={styles.pageConatiner}>
      <Head>
        <title>Stefan Syrett - About Me</title>
        <meta
          name="description"
          content="I'm a London based Front End Developer specialising in React and NextJS. You'll usually find me coding a new project, talking about it with with my friends or drinking coffee!"
        />
      </Head>
      <div className={styles.heading}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/avatars/photo-of-me.png" alt="photo of me" />
        <div className={styles.content}>
          <h1>Heya! I&apos;m Stefan.</h1>
          <p>
            I&apos;m a London based Front End Developer specialising in React
            and NextJS. You&apos;ll usually find me coding a new project,
            talking about it with my friends or drinking coffee!
          </p>
        </div>
      </div>

      <div className={styles.metadata}>
        <a href="/stefan-syrett-resume.pdf" download='Stefan Syrett - Resume'>Download My CV</a>
        <div className={styles.lists}>
          <ItemList title={"Skills"} items={ABOUT_SKILLS_LIST} />
          <ItemList title={"Interests"} items={ABOUT_INERESTS_LIST} />
        </div>
      </div>
    </div>
  );
};

export default About;
