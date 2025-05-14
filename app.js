import express from 'express';
const app = express();

app.use(express.json());

import playersRouter from './routes/players.routes.js';
app.use("/api/v1/players", playersRouter);

export { app }