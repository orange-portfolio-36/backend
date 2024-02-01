import { User } from "@prisma/client";
import { Request } from "express";

export type SignupBody = Omit<User, "id">;

export type SigninBody = Pick<User, "email" | "password">;

export interface TokenPayload {
  userId: string;
}
