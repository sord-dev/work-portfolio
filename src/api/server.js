import * as dotenv from "dotenv";
import axios from "axios";
dotenv.config();

// i may have to change the database and cms..

export const strapiServer = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const strapiConfig = {
  headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
};
