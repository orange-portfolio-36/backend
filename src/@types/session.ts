import { Session } from "@prisma/client";

export type SessionBody = Omit<Session, "id">;

export type SessionRevoke = Pick<Session, "token" | "userId">;
