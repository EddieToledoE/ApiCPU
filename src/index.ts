import "dotenv/config";
import express from "express";
import cors from "cors";
import dbInit from "../db/mongodb";
import { workerRoute } from "./worker/infrastructure/workerRoute";
const app = express();
const PORT = process.env.PORT || 7771;
app.use(cors());
app.use(express.json());
app.use("/workers", workerRoute);
dbInit().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
