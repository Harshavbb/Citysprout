import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, author };
    
    axios.post('http://localhost:5000/api/blog', newPost) // Use full backend URL
      .then(response => {
        console.log('Blog post created:', response.data);
        onPostCreated(); // Trigger parent component to refresh the post list
        setTitle(''); // Clear the form fields
        setContent('');
        setAuthor('');
      })
      .catch(error => {
        console.error("Error posting blog:", error.response?.data || error.message);
      });
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Content</label>
          <textarea 
            value={content} 
            onChange={e => setContent(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Author</label>
          <input 
            type="text" 
            value={author} 
            onChange={e => setAuthor(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
