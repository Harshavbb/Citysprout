import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Bloglist.css';

const BlogList = ({ refresh }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog'); // Use full backend URL
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error.response?.data || error.message);
      }
    };

    fetchPosts();
  }, [refresh]); // Refetch when the 'refresh' prop changes

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>Blog Posts</h2>
      </div>
      {posts.map(post => (
        <div className="post" key={post._id}>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-content">{post.content}</p>
          <p className="post-meta">
            <strong>By:</strong> {post.author} | 
            <em> Posted on: {new Date(post.date).toLocaleDateString()}</em>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
