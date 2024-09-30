const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

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

// Create a model from the space schema
const SpaceInput = mongoose.model('Spaceinputs', spaceSchema);

// POST route to save space input data
app.post('/api/space-input', async (req, res) => {
  const { Username, length, breadth, waterAvailability, sunlightExposure, soilType, soilFertility } = req.body;

  // Create a new space input entry with the received data
  const newSpaceInput = new SpaceInput({
    Username,
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

// Define a schema for User Registration
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true },
  password: { type: String, required: true }, // Password should be hashed
});

// Create a model from the user schema
const User = mongoose.model('login', userSchema);

// POST route for User Registration
app.post('/api/register', async (req, res) => {
  const { username, email, mobileNumber, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    user = new User({
      username,
      email,
      mobileNumber,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
