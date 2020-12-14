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

app.use((err, req, res, next) => {
  if (err.status === 400) {
    res.status(400).send({ err: "Wrong search information inputted" });
  } else if (err.status === 404) {
    res.status(404).send({ msg: "Person not found" });
  } else next(err);
});

export default app;
