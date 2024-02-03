import { OAuth2Client } from "google-auth-library";
import { GoogleCredentials } from "../@types";

const client = new OAuth2Client();

export async function verifyGoogleToken({ clientId, credential }: GoogleCredentials) {
  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: clientId,
  });
  const payload = ticket.getPayload();
  return payload;
}
