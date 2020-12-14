import express, { Application } from "express";

import Routes from "./routes";
import errorHandling from "./shared/errorHandling";
import middleware from "./shared/middleware";
import creditSearchRouter from "./routers/creditSearchRouter";

// Create an Express instance
const app: Application = express();

// Add any middleware
middleware(app);
app.use(express.json());

// Set up appropriate routes
Routes(app);
app.use("/credit-search", creditSearchRouter);

// Add any error handling
errorHandling(app);
app.use((error, req, res, next) => {
  if (/TypeError/.test(error)) res.status(404).send("Person not found");
});

export default app;
