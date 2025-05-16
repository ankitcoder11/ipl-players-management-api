import Joi from "joi";

export const playerSchema = Joi.object({
    name: Joi.string().trim().min(1).required().messages({
        "string.empty": "Name is required and cannot be empty.",
        "any.required": "Name is required.",
    }),
    team: Joi.string().trim().min(1).required().messages({
        "string.empty": "Team is required and cannot be empty.",
        "any.required": "Team is required.",
    }),
    country: Joi.string().trim().min(1).required().messages({
        "string.empty": "Country is required and cannot be empty.",
        "any.required": "Country is required.",
    }),
    runs: Joi.number().integer().required().messages({
        "number.base": "Runs must be an integer.",
        "any.required": "Runs is required.",
    }),
    image: Joi.string().uri().allow('').optional().messages({
        'string.uri': 'Image must be a valid URI if provided.',
    }),
    role: Joi.string().valid("Batsman", "Bowler", "All-rounder").required().messages({
        "any.only": "Role must be one of Batsman, Bowler, or All-rounder.",
        "any.required": "Role is required.",
    }),
    salary: Joi.number().positive().required().messages({
        "number.base": "Salary must be a number",
        "number.positive": "Salary must be a positive number",
        "any.required": "Salary is required"
    })
});