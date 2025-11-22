import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.mjs";
import cors from "cors";
import session from "express-session";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("DATA_BASE_CONNECTED");
  })
  .catch((error) => {
    console.log({ message: "server warning msg", error });
  });
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server Connected");
});
