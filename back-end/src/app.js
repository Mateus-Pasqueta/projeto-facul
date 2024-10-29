import express from "express";
import cors from "cors";
import pratosRoute from "./routes/pratosRoutes.js";
import loginRoute from "./routes/loginRoutes.js";
import { tokenValited } from "./config/auth.js";
import ordersRoutes from "./routes/ordersRoutes.js";

const app = express();

import index from "./routes/index.js";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "aplication/vnd.api+json"}));
app.use(cors());
app.use(index);
app.use("/api/plates/*", tokenValited);
app.use("/api/newPlate", tokenValited);
app.use('/api', pratosRoute);
app.use('/api', loginRoute);
app.use('/api', ordersRoutes);

export default app;