//mongoose.connect("mongodb+srv://chintandaxeshpatel:Qwert1851@cluster0.jexi3zu.mongodb.net/FormData");

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://chintandaxeshpatel:ZNEwFL1cklpV49Wl@cluster0.r1ze08e.mongodb.net/players");
const dataSchema = new mongoose.Schema({
  name: String,
  score: Number,
});

const Data = mongoose.model("Data", dataSchema);

app.get("/getres", async (req, res) => {
  try {
    const allData = await Data.find({}).lean();
    console.log("All data:", allData);
    res.json({ data: allData });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.post("/postdata", async (req, res) => {
  const newData = req.body;

  try {
    const createdData = await Data.create(newData);
    res.json({ createdData });
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ error: "Error adding data" });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
