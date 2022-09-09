import Head from "next/head";
import React from "react";
import { ItemList } from "../components/ItemList";
import styles from "../styles/About.module.css";

const About = () => {
  const handleDownloadFile = () => {
    console.log(
      "this will contain the functionality to send your cv to the user"
    );
  };
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
            talking about it with with my friends or drinking coffee!
          </p>
        </div>
      </div>

      <div className={styles.metadata}>
        <button onClick={handleDownloadFile}>Download My CV</button>
        <div className={styles.lists}>
          <div>
            <ItemList
              title={"Skills"}
              items={["HTML", "CSS", "Photoshop", "JavaScript", "React"]}
            />
          </div>

          <div>
            <ItemList
              title={"Interests"}
              items={["Coding", "Design", "Languages", "Video Games"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
