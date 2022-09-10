import React from "react";
import styles from "./projectdisplay.module.css";
import { ItemList } from "../ItemList";
import { LoadingSpinner } from "../LoadingSpinner";

export const ProjectDisplay = ({ project }) => {
  if(!project.attributes) return <LoadingSpinner message={'Data provided is invalid, please check component input.'}/>

  const {
    title,
    subtitle,
    description,
    features,
    lessonsLearned,
    architecture,
    potentialFeatures,
  } = project.attributes;

  return (
    <>
      <div className={styles.project_container}>
        <div className={styles.project_title}>
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div>

        <div className={styles.project_data_container}>
          <div className={styles.project_data}>
            <div className={styles.project_thumbnail}>thumbnail</div>

            <div className={styles.lists}>
              <ItemList
                title={"Architecture"}
                items={architecture.split(",")}
              />
              <ItemList
                title={"Potential Future Features"}
                items={potentialFeatures.split(",")}
              />
            </div>
          </div>

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
