
import {Request, Response, NextFunction } from "express";
import { CustomError } from "../@types";

export function errorMiddleware(err: CustomError, req: Request, res: Response, next: NextFunction){
 

    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'Internal Server Error';

    
  
    res.status(statusCode).json({ error: errorMessage });

}
