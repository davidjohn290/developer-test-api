import { Application } from "express";
import testRoutes from "./routes/test.routes";

export default (app: Application): void => {
  testRoutes(app);
};
