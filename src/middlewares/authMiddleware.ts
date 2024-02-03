import { NextFunction, Request, Response } from "express";
import { unauthorizedError } from "../errors/unauthorizedError";
import jwt from "jsonwebtoken";
import { TokenPayload } from "../@types";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const cookies = req.cookies;
  if (!cookies.accessToken) throw unauthorizedError({ message: "Acesso negado!" });

  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("Segredo não encontrado!");

  const payload = jwt.verify(cookies.accessToken, secret) as TokenPayload;

  res.locals["userId"] = Number(payload.userId);

  next();
}
