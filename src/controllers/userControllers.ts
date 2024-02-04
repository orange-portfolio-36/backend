import { Request, Response } from "express";
import { userService } from "../services/userServices";
import { GoogleCredentials, SigninBody, SignupBody } from "../@types";
import { sessionService } from "../services/sessionServices";

export async function signUp(req: Request<{}, {}, SignupBody>, res: Response) {
  const body = req.body;

  await userService.signUp(body);

  res.sendStatus(201);
}

export async function signIn(req: Request<{}, {}, SigninBody>, res: Response) {
  const body = req.body;

  const response = await userService.signIn(body);

  res.status(200).send(response);
}

export async function googleAuth(
  req: Request<{}, {}, GoogleCredentials>,
  res: Response
) {
  const credential = req.body;

  const response = await userService.googleAuth(credential);

  res.status(200).send(response);
}

export async function signOut(
  req: Request<{}, {}, { refreshToken: string }>,
  res: Response
) {
  const token = req.body.refreshToken;
  await sessionService.revoke({ token });

  res.sendStatus(200);
}
