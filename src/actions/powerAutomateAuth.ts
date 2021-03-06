import { Request, Response } from "express";
import bcrypt from "bcrypt";

const action = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;

    const comparePasswords: boolean = await bcrypt.compare(
      authorization.toString(),
      "$2b$06$s2BpC6fiM5z.WvjRYtTSnO9fztofrmYEi9C4mjkY6YLxswFNqzHo2"
    );

    console.log(comparePasswords);

    if (!comparePasswords) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    return res.status(200).json({ success: "true", log: `user authenticated` });
  } catch (e) {
    return res.status(400).json({ success: "false" });
  }
};

export default action;
