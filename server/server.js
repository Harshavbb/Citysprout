const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse incoming request body

// Connect to MongoDB
mongoose.connect('mongodb+srv://harshavbb:Sunflower427@cluster0.96eucu5.mongodb.net/CitySprout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

// Define a schema for Space Input
const spaceSchema = new mongoose.Schema({
  Username: String, 
  length: Number,
  breadth: Number,
  waterAvailability: String,
  sunlightExposure: String,
  soilType: String,
  soilFertility: String,
});

// Create a model from the schema
const SpaceInput = mongoose.model('Spaceinputs', spaceSchema);

// POST route to save space input data
app.post('/api/space-input', async (req, res) => {
  const { Username, length, breadth, waterAvailability, sunlightExposure, soilType, soilFertility } = req.body;

  // Create a new entry with the received data
  const newSpaceInput = new SpaceInput({
    Username, // Added Username field
    length,
    breadth,
    waterAvailability,
    sunlightExposure,
    soilType,
    soilFertility,
  });

  try {
    // Save to database
    await newSpaceInput.save();
    res.status(201).send('Space input data saved successfully');
  } catch (err) {
    res.status(400).send('Error saving data');
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
