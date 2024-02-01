import { Request, Response } from "express";
import { userService } from "../services/userServices";
import { SigninBody, SignupBody } from "../@types";

export async function signUp(req: Request<{}, {}, SignupBody>, res: Response) {
  const body = req.body;

  console.log(body)

  await userService.signUp(body);

  res.sendStatus(201);
}

export async function signIn(req: Request<{}, {}, SigninBody>, res: Response) {
  const body = req.body;

  const tokens = await userService.signIn(body);

  res.status(200).send(tokens);
}
