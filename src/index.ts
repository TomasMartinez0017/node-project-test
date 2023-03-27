import express from "express";
import { dummyRouter } from "./routes/dummy-router";

const app = express();
const port = 3000;

app.use(express.json());
app.use(dummyRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
