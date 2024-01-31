import { Request, Response } from "express";
import { sessionService } from "../services/sessionServices";

export async function refresh(
  req: Request<{}, {}, { refreshToken: string }>,
  res: Response
) {
  const { refreshToken } = req.body;

  const accessToken = await sessionService.validate(refreshToken);

  res.status(200).send({ accessToken });
}
