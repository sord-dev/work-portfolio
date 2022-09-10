import Link from "next/link";
import React from "react";
import styles from "./projectitem.module.css";

export const ProjectItem = (props) => {
  const { id, attributes } = props.project;
  const currentProject = attributes;

  return (
    <div className={styles.projectItem}>
      <div className={styles.thumbnail}></div>
      <h3>{currentProject.title}</h3>
      <p>{currentProject.subtitle}</p>
      <Link
        href={`/projects/${id}`}
        about={`link to ${currentProject.title} post`}
      >
        <a>View Details</a>
      </Link>
    </div>
  );
};

export const ProjectList = ({ data }) => {
  return (
    <div className={styles.projectList}>
      <div className={styles.projectListContainer}>
        {data &&
          data.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
};
