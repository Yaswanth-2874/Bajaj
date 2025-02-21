import express from "express";
import dotenv from "dotenv";
import postRouter from "./routes/post.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/bfhl", postRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
