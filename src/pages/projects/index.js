import Head from "next/head";
import React, { useEffect, useState } from "react";
import { strapiConfig, strapiServer } from "../../api/server";

//COMPONENTS
import { LoadingSpinner, ProjectList } from "../../components";

//STYLES
import styles from "../../styles/Projects.module.css";

const Projects = ({ data }) => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects(data);
  }, [data]);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Stefan Syrett - Projects</title>
        <meta
          name="description"
          content="Here are some of the projects I've been working on!"
        />
      </Head>

      {projects ? <ProjectList data={projects} /> : <LoadingSpinner />}
    </div>
  );
};

//DATA
export async function getServerSideProps() {
  const res = await strapiServer.get("/projects", strapiConfig);
  const props = { data: res.data.data }
  return {props};
}

export default Projects;
