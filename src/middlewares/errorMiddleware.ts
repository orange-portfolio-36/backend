
import {Request, Response } from "express";
import { CustomError } from "../@types";

export function errorMiddleware(err: CustomError, req: Request, res: Response){
    console.log(err.stack)

    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'Internal Server Error';
  
    res.status(statusCode).json({ error: errorMessage });
}