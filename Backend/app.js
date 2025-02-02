import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/user.js";
import paymentRoute from "./routes/paymentRoutes.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

import path from "path";
const _dirname = path.dirname("");
const buildpath = path.join(_dirname,"../frontend/dist");
app.use(express.static(buildpath));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

dbConnection();

app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_KEY_ID })
);

app.use(errorMiddleware);

export default app;
