import React from 'react';
import './About.css'; // Optional: Create a CSS file to style the About section.

function About() {
  return (
    <div className="about-container">
      <h1>About CitySprout</h1>
      <p>Welcome to CitySprout!</p>
      <p>
        CitySprout is a community-driven platform designed to tackle urban food
        insecurity and promote sustainable agriculture. By connecting people
        with innovative urban farming techniques, we empower communities to
        transform unused urban spaces into thriving, productive green spaces.
      </p>

      <h2>Our Mission</h2>
      <p>
        At CitySprout, we believe that everyone should have access to fresh, healthy food. 
        Our mission is to bridge the gap between urban living and agriculture by promoting the following:
      </p>
      <ul>
        <li><strong>Sustainability:</strong> Encouraging eco-friendly farming techniques like hydroponics, vertical farming, and terrace gardening.</li>
        <li><strong>Community Engagement:</strong> Bringing people together to cultivate community gardens and share knowledge and experiences.</li>
        <li><strong>Food Security:</strong> Transforming urban spaces into productive hubs that provide nutritious food to those in need.</li>
      </ul>

      <h2>What We Do</h2>
      <p>
        CitySprout offers a range of features to help communities grow, sustain, and share their produce:
      </p>
      <ul>
        <li><strong>Space Input & Analysis:</strong> Our platform helps users make the best use of their available space by suggesting the most suitable farming method—whether it's rooftop gardening, hydroponics, or greenhouse cultivation.</li>
        <li><strong>Educational Resources:</strong> We provide step-by-step guides, tutorials, and workshops on various urban farming techniques to ensure you succeed in your gardening efforts.</li>
        <li><strong>Community Blog:</strong> Our blog section allows members to share their experiences, tips, and ideas on urban gardening, helping build a knowledge-sharing community.</li>
        <li><strong>Impact Tracking:</strong> We help communities track the impact of their farming efforts by monitoring food production, distribution, and overall sustainability metrics.</li>
      </ul>

      <h2>Join the Movement</h2>
      <p>
        Whether you’re an individual, school, or local organization, CitySprout offers the tools and resources to help you grow your own food sustainably. 
        By harnessing the potential of urban spaces, we can collectively fight food insecurity and build greener, healthier cities.
      </p>

      <h2>How it Works</h2>
      <ol>
        <li><strong>Sign Up:</strong> Create an account and start by inputting the details of your available space.</li>
        <li><strong>Get Recommendations:</strong> Based on your space's sunlight, water access, and size, receive customized suggestions for the best farming methods.</li>
        <li><strong>Start Growing:</strong> Use our resources and tutorials to implement your chosen method.</li>
        <li><strong>Join the Community:</strong> Share your progress, challenges, and successes through our blog, and connect with others.</li>
      </ol>

      <h2>Our Vision</h2>
      <p>
        We envision a world where every urban space, no matter how small, contributes to reducing food scarcity and fostering sustainable growth. 
        By building strong, resilient communities centered around agriculture, CitySprout aims to create greener, more sustainable cities for future generations.
      </p>
    </div>
  );
}

export default About;
