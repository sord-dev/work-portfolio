import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./projectitem.module.css";

export const ProjectItem = (props) => {
  const { project } = props;

  return (
    <div className={styles.projectItem}>
      <Link
        href={`/projects/${project._id}`}
        about={`link to ${project.title} post`}
      >
        <div className={styles.thumbnail}>
          <Image src={project.imgurl} width={"200px"} height={"200px"} alt='project thumbnail' />
        </div>
      </Link>
      <h3>{project.title}</h3>
      <p>{project.subtitle}</p>
      <Link
        href={`/projects/${project._id}`}
        about={`link to ${project.title} post`}
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
            <ProjectItem key={project._id} project={project} />
          ))}
      </div>
    </div>
  );
};
