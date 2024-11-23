import express from "express";
import cors from "cors";
import jobRoute from "./routes/jobRoute.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./utils/dbConnection.js";

dotenv.config();
const PORT = process.env.PORT || 5050;
const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
// app.use("/record", records);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/jobs", jobRoute);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.json({ message: "Hello Crud Node Express" });
// });
