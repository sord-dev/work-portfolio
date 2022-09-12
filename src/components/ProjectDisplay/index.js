import React from "react";
import styles from "./projectdisplay.module.css";
import { ItemList } from "../ItemList";
import { LoadingSpinner } from "../LoadingSpinner";
import Image from "next/image";
import { Button } from "../Button";

export const ProjectDisplay = ({ project }) => {
  if (!Object.keys(project).length > 0)
    return (
      <LoadingSpinner message="The data provided to this component is incorrect" />
    );

  const {
    title,
    subtitle,
    description,
    features,
    lessons,
    architecture,
    futureFeatures,
  } = project;

  return (
    <>
      <div className={styles.project_container}>
        <div className={styles.project_title}>
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div>

        <div className={styles.project_data_container}>
          <div className={styles.project_data}>
            <div className={styles.project_thumbnail}>
              {project.imgurl ? (
                <Image
                  src={project.imgurl}
                  width={"850px"}
                  height={"850px"}
                  alt="project image"
                />
              ) : (
                thumbnail
              )}
            </div>
            
            <div className={styles.live_buttons}>
           {project.liveLink && <Button size={'sm'} text={'Live Site'} href={project.liveLink} />}
           {project.githubLink && <Button size={'sm'} text={'Github'} href={project.githubLink} /> }

           
            
            </div>

            <div className={styles.lists}>
              <ItemList
                title={"Architecture"}
                items={architecture.split(",")}
              />
              <ItemList
                title={"Potential Future Features"}
                items={futureFeatures.split(",")}
              />
            </div>
          </div>

          <div className={styles.project_desc}>
            <h2>Description</h2>
            <p>{description}</p>
            <h2>Features</h2>
            <p>{features}</p>
            <h2>Lessons Learned</h2>
            <p>{lessons}</p>
          </div>
        </div>
      </div>
    </>
  );
};
