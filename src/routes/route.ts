import { Response, Router } from "express";
import authRoute from "./auth";

const routes = Router();

routes.get("/", async (_, res: Response) =>
  res.json({
    name: "Power Automate Testing",
    description:
      "I'm using this server to authenticate power automate http requests",
  })
);

routes.use("/powerAutomate", authRoute);

export default routes;
