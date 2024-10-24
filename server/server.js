const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://harshavbb:Sunflower427@cluster0.96eucu5.mongodb.net/CitySprout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// 1. User Authentication (Registration, Login, and Token Verification)

// Define a schema for User Registration
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true },
  password: { type: String, required: true }, // Hashed password
});

// Create a model from the user schema
const User = mongoose.model('User', userSchema);

// POST route for User Registration
app.post('/api/register', async (req, res) => {
  const { username, email, mobileNumber, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user with hashed password
    user = new User({
      username,
      email,
      mobileNumber,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// POST route for User Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('Invalid username or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid username or password');
    }

    const token = jwt.sign({ username: user.username }, 'your_secret_key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Middleware to authenticate user using token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401); // No token

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user;
    next();
  });
};

// GET route for fetching user details
app.get('/api/user', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username });
    if (!user) return res.status(404).send('User not found');

    // Exclude password from response
    const { password, ...userData } = user.toObject();
    res.json(userData); // Send user data
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching user data');
  }
});

// 2. Space Input Functionality

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
const SpaceInput = mongoose.model('SpaceInput', spaceSchema);

// POST route to save space input data
app.post('/api/space-input', async (req, res) => {
  const { Username, length, breadth, waterAvailability, sunlightExposure, soilType, soilFertility } = req.body;

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
    await newSpaceInput.save();
    res.status(201).send('Space input data saved successfully');
  } catch (err) {
    res.status(400).send('Error saving data');
  }
});

// 3. Blog Post Functionality

// Define a schema for Blog Post
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Create a model from the blog post schema
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// GET route to fetch all blog posts
app.get('/api/blog', async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ date: -1 }); // Sort by date descending
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// POST route to create a new blog post
app.post('/api/blog', async (req, res) => {
  const { title, content, author } = req.body;

  const newPost = new BlogPost({ title, content, author });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(400).send('Error saving the blog post');
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
