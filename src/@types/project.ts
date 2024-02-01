import { Project } from "@prisma/client";

export type ProjectBody = Omit<Project, "id">;
