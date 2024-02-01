import { Request, Response } from "express";
import { tagService } from "../services/tagServices";

export async function getAll(_req: Request, res: Response) {
  const tags = await tagService.getAll();

  res.status(200).send(tags);
}
