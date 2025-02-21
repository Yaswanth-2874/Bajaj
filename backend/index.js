import express from "express";
import dotenv from "dotenv";
import postRouter from "./routes/post.route.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/", postRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
