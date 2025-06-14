import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
import process from "process";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PAT = process.env.VITE_PAT ;
const USER_ID = process.env.VITE_USER_ID;
const VITE_API_KEY_2= process.env.VITE_API_KEY_2;
const API_KEY = process.env.VITE_API_KEY;
const APP_ID = process.env.VITE_APP_ID ;
const MODEL_ID = process.env.VITE_MODEL_ID;
const MODEL_VERSION_ID = process.env.VITE_MODEL_VERSION_ID ;

app.post("/clarifai", async (req, res) => {
  const { imageUrl } = req.body;

  const raw = JSON.stringify({
    user_app_id: { user_id: USER_ID, app_id: APP_ID },
    inputs: [{ data: { image: { url: imageUrl } } }]
  });

  try {
    const response = await fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: 'Key ' + PAT 
        },
        body: raw
      }
    );
    const data = await response.json();
    res.json(data);
    console.log(data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(5000, () => console.log("Proxy running on port 5000"));