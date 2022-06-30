import { Router } from "express";
import { powerAutomateAuth } from "../actions";

const routes: Router = Router();

routes.get("/auth", powerAutomateAuth);

export default routes;
