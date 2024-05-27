import React from 'react';
import './App.css';

// Dummy data for blog posts
const blogPosts = [
  {
    title: 'Post One',
    description: 'This is the first post.',
    imageUrl: 'path-to-image-1.jpg',
  },
  {
    title: 'Post Two',
    description: 'This is the second post.',
    imageUrl: 'path-to-image-2.jpg',
  },
  {
    title: 'Post Three',
    description: 'This is the third post.',
    imageUrl: 'path-to-image-3.jpg',
  },
];

const BlogPost = ({ title, description, imageUrl }) => (
  <div className="blog-post">
    <img src={imageUrl} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const App = () => (
  <div className="app">
    <h1>Recent Blog Posts</h1>
    <div className="blog-posts-container">
      {blogPosts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  </div>
);

export default App;
