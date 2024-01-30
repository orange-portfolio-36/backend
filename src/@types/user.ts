import { User } from "@prisma/client";

export type SignupBody = Omit<User, "id">;

export type SigninBody = Pick<User, "email" | "password">;
