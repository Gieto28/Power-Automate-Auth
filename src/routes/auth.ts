import { Router } from "express";
import { powerAutomateAuth } from "../actions";

const routes: Router = Router();

routes.post("/auth", powerAutomateAuth);

export default routes;
