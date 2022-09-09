import * as dotenv from "dotenv";
import axios from "axios";
dotenv.config();

export const strapiServer = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const strapiConfig = {
  headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
};
