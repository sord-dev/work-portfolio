import Head from "next/head";
import React, { useEffect, useState } from "react";

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

      {projects ? (
        <ProjectList data={projects} />
      ) : (
        <LoadingSpinner message={"Conn Error - No Projects Found"} />
      )}
    </div>
  );
};

import axios from "axios";

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:3000/api/projects');
    return {
      props: { data: res.data },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}

export default Projects;
