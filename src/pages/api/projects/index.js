import { Project } from "../../../models/project";
import { connectMongo } from "../../../utils/database";

/** 

* @param {import('next').NextApiRequest} req

* @param {import('next').NextApiResponse} res

*/
const listProjects = async (req, res) => {
  await connectMongo();
  res.json(await Project.find());
};

export default listProjects;
