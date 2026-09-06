import express, { type Express } from "express";
import cors from "cors";
import router from "./routes";

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api", router);

export default app;
