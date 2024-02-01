import { User } from "@prisma/client";
import { Request, Response } from "express";
import { userService } from "../services/userServices";

export async function signUp(req: Request<{}, {}, User>, res: Response) {
  const body = req.body;

  console.log(body)

  await userService.signUp(body);

  res.sendStatus(201);
}
