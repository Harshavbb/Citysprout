// routes/BlogPost.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

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
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ date: -1 }); // Sort by date descending
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// POST route to create a new blog post
router.post('/', async (req, res) => {
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

module.exports = router;
