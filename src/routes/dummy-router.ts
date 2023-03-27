import express, { Request, Response } from "express";

const dummyRouter = express.Router();

dummyRouter.get(
  "/hello",
  async(_req: Request, res: Response) => {
    res.json('Hello World!');
  }
)

export { dummyRouter };
