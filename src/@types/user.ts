import { User } from "@prisma/client";

export type SignupBody = Omit<User, "id">;

export type SigninBody = Pick<User, "email" | "password">;

export interface SigninResponse {
  name: string;
  email: string;
  id: number;
  jwt: string;
}

export interface TokenPayload {
  userId: string;
}

export interface GoogleCredentials {
  clientId: string;
  credential: string;
}
