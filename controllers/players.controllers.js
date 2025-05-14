import { Player } from "../models/players.model.js";

// Get all players
export const getPlayers = async (req, res) => {
    try {
        const players = await Player.find().select("-country  -runs  -salary");
        res.status(200).json({
            success: true,
            message: "Players fetched successfully",
            data: players,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching players",
            errors: [error.message],
        });
    }
};

// Create a new player
export const createPlayer = async (req, res) => {
    try {
        const { name, team, country, role, runs, salary } = req.body;
        const player = new Player({
            name, team, country, role, runs, salary, image: req.file?.path || "",
        });

        await player.save();
        res.status(201).json({
            success: true,
            message: "Player created successfully",
            data: player,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create player",
            errors: [error.message],
        });
    }
};
// Get a single player
export const getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({
                success: false,
                message: "Player not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Player fetched successfully",
            data: player,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching player",
            errors: [error.message],
        });
    }
};

// Update a player
export const updatePlayer = async (req, res) => {
    try {
        const playerId = req.params.id;
        const updates = req.body;

        if (req.file) {
            updates.image = req.file.path;
        }

        const updatedPlayer = await Player.findByIdAndUpdate(playerId, updates, {
            new: true,
            runValidators: true,
        });

        if (!updatedPlayer) {
            return res.status(404).json({ success: false, message: "Player not found" });
        }

        res.status(200).json({
            success: true,
            message: "Player updated successfully",
            data: updatedPlayer,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating player",
            errors: [error.message],
        });
    }
};

// Delete a player
export const deletePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) {
            return res.status(404).json({
                success: false,
                message: "Player not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Player deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting player",
            errors: [error.message],
        });
    }
};