import React from "react";
import styles from "./projectdisplay.module.css";

export const ProjectDisplay = ({ project }) => {
  const {
    title,
    subtitle,
    description,
    features,
    lessonsLearned,
    architecture,
    potentialFeatures,
  } = project;

  return (
    <>
      <div className={styles.project_container}>
          {/* title */}
          <div className={styles.project_title}>
            <h1>{title}</h1>
            <span>{subtitle}</span>
          </div>

          {/* flex container */}
          <div className={styles.project_data_container}>
            {/* first sect */}
            <div className={styles.project_data}>
              <div className={styles.project_thumbnail}>thumbnail</div>

              <h3>Architecture</h3>
              <p>{architecture}</p>

              <h3>Potential Future Features</h3>
              <p>{potentialFeatures}</p>
            </div>

            {/* secnd sect */}
            <div className={styles.project_desc}>
              <h2>Description</h2>
              <p>{description}</p>
              <h2>Features</h2>
              <p>{features}</p>
              <h2>Lessons Learned</h2>
              <p>{lessonsLearned}</p>
            </div>
          </div>
        </div>
    </>
  );
};
