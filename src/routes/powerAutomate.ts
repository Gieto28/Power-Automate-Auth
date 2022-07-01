import { Router } from "express";
import { createTask, powerAutomateAuth } from "../actions";

const routes: Router = Router();

routes.post("/auth", powerAutomateAuth);
routes.post("/create", createTask);

export default routes;
