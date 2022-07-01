import { Request, Response } from "express";

const action = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    return res.status(200).json({ success: "sucess" });
  } catch (e) {
    return res.status(400).json({ success: "false" });
  }
};

export default action;
