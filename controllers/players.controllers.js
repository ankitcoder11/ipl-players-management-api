import { Player } from "../models/players.model";

// Get all players
export const getPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new player
export const createPlayer = async (req, res) => {
    try {
        const player = new Player(req.body);
        await player.save();
        res.status(201).json(player);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// @desc    Get a single player by ID
export const getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) return res.status(404).json({ message: "Player not found" });
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// @desc    Update a player by ID
export const updatePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!player) return res.status(404).json({ message: "Player not found" });
        res.status(200).json(player);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// @desc    Delete a player by ID
export const deletePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) return res.status(404).json({ message: "Player not found" });
        res.status(200).json({ message: "Player deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
