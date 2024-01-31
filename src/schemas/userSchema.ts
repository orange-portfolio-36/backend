import Joi from "joi";
import { SigninBody, SignupBody } from "../@types";

export const createUserSchema = Joi.object<SignupBody>({
  email: Joi.string().email(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  password: Joi.string().min(8),
});

export const signInSchema = Joi.object<SigninBody>({
  email: Joi.string().email(),
  password: Joi.string().min(8),
});
