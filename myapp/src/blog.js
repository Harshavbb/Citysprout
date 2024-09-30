import React from 'react';
import './blog.css';

const FarmingMethods = () => {
  return (
    <div className="farming-methods-container">
      <h1>Farming Methods</h1>
      
      <section>
        <h2>1. Hydroponics</h2>
        <p>
          Hydroponics is a method of growing plants without soil, using mineral nutrient solutions in a water solvent.
          It allows for faster growth and more efficient use of water. Ideal for indoor spaces, hydroponics can be done
          in small, controlled environments like homes and greenhouses.
        </p>
        <h3>How to Implement Hydroponics:</h3>
        <ul>
          <li>Choose a container or hydroponic system.</li>
          <li>Fill the system with water and add nutrient solution.</li>
          <li>Plant seeds or seedlings in growing medium.</li>
          <li>Provide consistent light and monitor water pH and nutrient levels.</li>
        </ul>
      </section>
      
      <section>
        <h2>2. Vertical Farming</h2>
        <p>
          Vertical farming involves stacking multiple layers of crops to maximize the use of vertical space.
          It’s perfect for urban environments where horizontal space is limited. Crops are often grown indoors using
          artificial lights or controlled natural light.
        </p>
        <h3>How to Implement Vertical Farming:</h3>
        <ul>
          <li>Set up racks or vertical planters.</li>
          <li>Install lighting (if growing indoors) to simulate sunlight.</li>
          <li>Plant crops in soil or a hydroponic system on each level.</li>
          <li>Maintain proper water and nutrient supply.</li>
        </ul>
      </section>
      
      <section>
        <h2>3. Greenhouse Cultivation</h2>
        <p>
          Greenhouse cultivation allows for the control of environmental conditions, making it easier to grow crops
          year-round. It provides protection from harsh weather and pests while optimizing temperature, humidity, and
          light for crop growth.
        </p>
        <h3>How to Implement Greenhouse Cultivation:</h3>
        <ul>
          <li>Set up or purchase a greenhouse structure.</li>
          <li>Ensure proper ventilation and temperature control.</li>
          <li>Plant crops in soil or hydroponic systems within the greenhouse.</li>
          <li>Regularly monitor temperature, humidity, and pest control.</li>
        </ul>
      </section>
      
      <section>
        <h2>4. Terrace Gardening</h2>
        <p>
          Terrace gardening is the practice of growing crops on rooftops or balconies in urban environments.
          It makes use of the space available in cities and is ideal for personal use, offering fresh produce in urban homes.
        </p>
        <h3>How to Implement Terrace Gardening:</h3>
        <ul>
          <li>Assess the rooftop or balcony area for structural safety and sunlight exposure.</li>
          <li>Use containers or raised beds with proper drainage.</li>
          <li>Plant suitable crops based on climate and space.</li>
          <li>Regularly water and monitor plants for pests and diseases.</li>
        </ul>
      </section>

      <section>
        <h2>5. Mushroom Cultivation</h2>
        <p>
          Mushroom cultivation is a unique method that doesn’t require sunlight and can be done in small, dark spaces.
          Mushrooms grow quickly in moist environments and are an excellent source of nutrition.
        </p>
        <h3>How to Implement Mushroom Cultivation:</h3>
        <ul>
          <li>Choose a cool, dark place with proper ventilation.</li>
          <li>Prepare the growing medium (e.g., straw or sawdust).</li>
          <li>Inoculate the medium with mushroom spores.</li>
          <li>Maintain humidity and monitor growth for harvesting.</li>
        </ul>
      </section>
    </div>
  );
};

export default FarmingMethods;
