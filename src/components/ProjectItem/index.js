import Link from "next/link";
import React from "react";
import styles from "./projectitem.module.css";

export const ProjectItem = (props) => {
    const {attributes} = props.project
    const currentProject = attributes;
    const slug = '/projects/' + currentProject.title.split(' ').join('-').toLowerCase()
    
  return (
    <div className={styles.projectItem}>
      <div className={styles.thumbnail}></div>
      <h3>{currentProject.title}</h3>
      <p>{currentProject.subtitle}</p>
      <Link href={slug}  about={`link to ${currentProject.title} post`}>
        <a>Continue Reading...</a>
      </Link>
    </div>
  );
};

export const ProjectList = ({ data }) => {
  return (
    <div className={styles.projectList}>
    {data && data.map(project => <ProjectItem key={project.id} project={project}/> )}
    </div>
  );
};
