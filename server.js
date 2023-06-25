const express = require("express");
const mongoose = require("mongoose");
const app = express();
const fs = require('fs');
const { MongoClient } = require('mongodb');
const multer = require("multer");

app.use(express.static('front'));
app.use(express.json()); // Add this middleware to parse JSON in the request body
const upload = multer();

const uri =
  "mongodb+srv://anushk1442:xNRQHjvj79hecwM@test123.rxxjcc7.mongodb.net/?retryWrites=true&w=majority";

// Define a schema for the data you want to upload to MongoDB
const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  expiry: String
}, { collection: 'test' });

// Define a model based on the schema
const Item = mongoose.model('Item', itemSchema);

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

// Add a POST route to handle the JSON file upload
app.post("/upload", upload.single("file"), async (req, res) => {
  console.log("Entered upload");
  try {
    ///const json = req.body; // Access the JSON data from the request body
    const fileText = req.file.buffer.toString("utf8");

    // Log the file content
    console.log("File Contents:", fileText);

    var document = fileText;
    const obj = JSON.parse(document);

    // insert record
    
    const item = new Item(obj); // Create a new item based on the JSON data

    // Save the item to the database
    await item.save();

    console.log("Item saved:", item); // Log the saved item
    console.log("Item info:", item.name);

    res.status(200).json({ message: "Item uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
