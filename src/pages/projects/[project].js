import Head from "next/head";
import React from "react";

//DATA
import { strapiConfig, strapiServer } from "../../api/server";
import {
  DEFAULT_PROJECT_PAGE_DESC,
  DEFAULT_PROJECT_PAGE_TITLE,
} from "../../data";

// COMPONENTS
import { ProjectDisplay } from "../../components";
import NotFound from "../404";


const ProjectPage = ({ data }) => {
  const pageTitle = data
    ? `Stefan Syrett - ${data.attributes.title}`
    : DEFAULT_PROJECT_PAGE_TITLE;
  const pageDesc = data
    ? data.attributes.description
    : DEFAULT_PROJECT_PAGE_DESC;

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
    const projectId = req.query.project;
    const res = await strapiServer.get(`/projects/${projectId}`, strapiConfig);
    return {
      props: { data: res.data.data },
    };
  } catch (error) {
    console.log(`API request failed! Error = ${error}`);
    return { props: {} };
  }
}

export default ProjectPage;
