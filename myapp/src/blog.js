import React, { useState } from 'react';
import BlogList from './components/Bloglist';
import CreatePost from './components/Createpost';

const Blog = () => {
  const [refresh, setRefresh] = useState(false);

  const handlePostCreated = () => {
    setRefresh(!refresh); // Toggle refresh state to refresh the BlogList component
  };

  return (
    <div>
      <h1>Blog</h1>
      <CreatePost onPostCreated={handlePostCreated} />
      <BlogList refresh={refresh} />
    </div>
  );
};

export default Blog;
