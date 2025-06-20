import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectMongoDb from "./db/connectMongoDB.js";

dotenv.config()

const PORT = process.env.PORT;
const app = express();

app.use("/api/auth", authRoutes);

app.get("/", (req,res) => {
  res.send("Server is ready!");
});

app.listen(PORT, () => {
  connectMongoDb();
  console.log(`Listening to PORT ${PORT}` );

  }
)
