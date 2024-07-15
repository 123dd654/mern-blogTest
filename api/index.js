import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("몽고디비 연결성공");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("서버가 3000 포트에서 실행 중입니다.");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
