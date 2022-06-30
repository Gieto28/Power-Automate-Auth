import { Request, Response } from "express";
import bcrypt from "bcrypt";

const action = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    console.log(password);

    const comparePasswords: boolean = await bcrypt.compare(
      password,
      "$2b$06$s2BpC6fiM5z.WvjRYtTSnO9fztofrmYEi9C4mjkY6YLxswFNqzHo2"
    );

    if (!comparePasswords) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    return res
      .status(200)
      .json({ success: "true", log: `user ${username} authenticated` });
  } catch (e) {
    return res.status(400).json({ success: "false" });
  }
};

export default action;
