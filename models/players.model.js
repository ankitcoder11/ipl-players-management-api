import mongoose, { Schema } from "mongoose";

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    team: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    runs: {
        type: Number
    },
    image: {
        type: String
    },
    role: {
        type: String,
        required: true,
        enum: ["Batsman", "Bowler", "All-rounder"]
    },
    salary: {
        type: Number,
        required:true
    },

}, { timestamps: true });

export const Player = mongoose.model("Player", playerSchema)