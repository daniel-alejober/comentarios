import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import mensajeRoutes from "./routes/mensajeRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("mensajes 1.0.0");
});
app.use("/api/v1/mensajes", mensajeRoutes);

const startServer = async () => {
  const port = process.env.PORT || 5000;
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(port, () => {
      console.log(`🚀 Server connected in the port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
