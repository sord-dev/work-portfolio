import Head from "next/head";
import React from "react";

//DATA
import {
  DEFAULT_PROJECT_PAGE_DESC,
  DEFAULT_PROJECT_PAGE_TITLE,
} from "../../data";

// COMPONENTS
import { ProjectDisplay } from "../../components";
import { BackEndAPI } from "../../utils/axios";
import NotFound from "../404";

const ProjectPage = ({ data }) => {
  const pageTitle = data
    ? `Stefan Syrett - ${data.title}`
    : DEFAULT_PROJECT_PAGE_TITLE;
  const pageDesc = data ? data.description : DEFAULT_PROJECT_PAGE_DESC;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Head>

      {data ? <ProjectDisplay project={data} /> : <NotFound />}
    </div>
  );
};


export async function getServerSideProps(req) {
  try {
    const projectId = req.query.id;
    const response = await BackEndAPI.get(`/api/projects/${projectId}`);
    return {
      props: { data: response.data },
    };
  } catch (error) {
    console.log(`API request failed! Error = ${error}`);
    return { props: {} };
  }
}

export default ProjectPage;
