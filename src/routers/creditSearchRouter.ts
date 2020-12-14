import express from "express";
import postCreditSearch from "../controllers/creditSearch.controllers";

const creditSearchRouter = express.Router();

creditSearchRouter.post("/", postCreditSearch);

export default creditSearchRouter;
