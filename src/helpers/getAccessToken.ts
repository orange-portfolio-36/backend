import { TokenPayload } from "../@types";
import jwt from "jsonwebtoken";

export function getAccessToken(payload: TokenPayload) {
  const secret = getSecret();
  const accessToken = jwt.sign(payload, secret, { expiresIn: 60 });
  return accessToken;
}
