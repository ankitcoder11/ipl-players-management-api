import Joi from "joi";

export const playerSchema = Joi.object({
    name: Joi.string().trim().required(),
    team: Joi.string().trim().required(),
    country: Joi.string().trim().required(),
    runs: Joi.number().optional(),
    image: Joi.string().uri().optional(),
    role: Joi.string().valid("Batsman", "Bowler", "All-rounder").required(),
    salary: Joi.number().required(),
});