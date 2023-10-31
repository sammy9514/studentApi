import express, { Application } from "express";
import cors from "cors";
import { error } from "console";
import { client } from "./utils/dbconfig";

const port = 4004;
const app: Application = express();

app.use(express.json());
app.use(cors());
client;

const server = app.listen(port, () => {
  console.log("server is up and running");
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  server.close(() => {
    process.exit(1);
  });
});
