import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p><strong>By:</strong> {post.author}</p>
          <p><em>Posted on: {new Date(post.date).toLocaleDateString()}</em></p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
