import { Request, Response } from "express";
import { userService } from "../services/userServices";
import { SessionRevoke, SigninBody, SignupBody } from "../@types";
import { sessionService } from "../services/sessionServices";

export async function signUp(req: Request<{}, {}, SignupBody>, res: Response) {
  const body = req.body;

  await userService.signUp(body);

  res.sendStatus(201);
}

export async function signIn(req: Request<{}, {}, SigninBody>, res: Response) {
  const body = req.body;

  const tokens = await userService.signIn(body);

  res.status(200).send(tokens);
}

export async function signOut(
  req: Request<{}, {}, { refreshToken: string }>,
  res: Response
) {
  const token = req.body.refreshToken;
  await sessionService.revoke({ token });

  res.sendStatus(200);
}
