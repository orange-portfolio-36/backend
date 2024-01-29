import Joi from "joi";
import { SignupBody } from "../@types";

export const createUserSchema = Joi.object<SignupBody>({
    email: Joi.string().email(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    password: Joi.string().min(8)
});
