import express from "express";
import { get, post } from "../contoller/post.controller.js";

const postRouter = express.Router();

postRouter.post("/", post);
postRouter.get("/", get);

export default postRouter;
