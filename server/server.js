// server/server.js
dotenv.config({ path: ".env.local" }); // 👈 correct path
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Contact form route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("Received form data:", { name, email, message });
    res.status(200).json({ success: true, message: "Message received!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));





// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";
// import mongoose from "mongoose";

// dotenv.config();

// const uri = process.env.MONGO_URI;

// console.log("Mongo URI:", uri); // test if it logs correctly

// mongoose.connect(uri)
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch(err => console.error("❌ MongoDB connection error:", err));
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // async function connectToDb() {
// //   try {
// //     await client.connect();
// //     console.log("✅ Connected to MongoDB Atlas");
// //   } catch (err) {
// //     console.error("❌ Error connecting to MongoDB Atlas:", err);
// //   }
// // }

// // connectToDb();

// export default client;



// // server.js
// const express = require('express');
// const { MongoClient } = require('mongodb');
// const cors = require('cors'); // For handling CORS if frontend is on a different origin
// require("dotenv").config({ path: "./server/.env.local" });

// const app = express();
// const port = 5000;

// const uri = "mongodb+srv://sahuabhishek3810_db_user:oWJT1HF9NHUbcTsk@cluster0.mongodb.net/My_AI?retryWrites=true&w=majority"; // Replace with your actual connection string
// const client = new MongoClient(uri);

// app.use(cors());
// app.use(express.json()); // To parse JSON request bodies

// async function connectToDb() {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB Atlas!");
//     } catch (error) {
//         console.error("Error connecting to MongoDB Atlas:", error);
//     }
// }

// connectToDb();

// // Example API endpoint to get users
// app.get('/api/users', async (req, res) => {
//     try {
//         const database = client.db('My_AI'); // Specify your database name
//         const users = database.collection('users'); // Specify your collection name
//         const allUsers = await users.find({}).toArray();
//         res.json(allUsers);
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         res.status(500).send("Error fetching users");
//     }
// });

// app.listen(port, () => {
//     console.log(`Backend listening at http://localhost:${port}`);
// });

















