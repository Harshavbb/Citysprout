import React, { useState } from 'react';
import axios from 'axios';
import './input.css';

function SpaceInput() {
  // Form data and state
  const [formData, setFormData] = useState({
    Username: '',
    length: '',
    breadth: '',
    waterAvailability: '',
    sunlightExposure: '',
    soilType: '',
    soilFertility: '',
  });

  const [message, setMessage] = useState(''); // Success or error message
  const [farmingMethod, setFarmingMethod] = useState(''); // Farming method recommendation

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Farming method recommendation algorithm
  const suggestFarmingMethod = ({ length, breadth, waterAvailability, sunlightExposure, soilType, soilFertility }) => {
    const area = length * breadth;
    let methods = [];

    if (area < 50 || soilFertility === 'Low' || sunlightExposure === 'Low') {
      methods.push('Hydroponics');
    }
    if (area >= 50 && area < 200 && sunlightExposure === 'Medium' && waterAvailability !== 'Low') {
      methods.push('Vertical Farming');
    }
    if (area >= 200 && (sunlightExposure === 'Low' || sunlightExposure === 'Medium') && waterAvailability !== 'Low') {
      methods.push('Greenhouse Farming');
    }
    if (sunlightExposure === 'Low' && soilFertility !== 'Low') {
      methods.push('Mushroom Cultivation');
    }
    if (area < 100 && sunlightExposure === 'High' && waterAvailability === 'High') {
      methods.push('Terrace Gardening');
    }
    if (area >= 200 && waterAvailability === 'High' && sunlightExposure === 'High' && soilFertility === 'High') {
      methods.push('Traditional Farming');
    }

    return methods.length > 0 ? methods.join(', ') : 'No suitable farming method found';
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Call the suggestion function with form data
    const farmingMethod = suggestFarmingMethod(formData);
    setFarmingMethod(farmingMethod);

    try {
      // Send data to backend and store in database
      const response = await axios.post('http://localhost:5000/api/space-input', formData);

      // If successful, show a success message and farming method
      setMessage('Data saved successfully!');
      console.log('Data saved:', response.data);

      // Clear form fields after submission
      setFormData({
        Username: '',
        length: '',
        breadth: '',
        waterAvailability: '',
        sunlightExposure: '',
        soilType: '',
        soilFertility: '',
      });
    } catch (error) {
      // If there's an error, show an error message
      setMessage('Error saving data. Please try again.');
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className='inputdiv'>
      <h2 className='inputh2'>Space Input Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="Username"
          value={formData.Username}
          onChange={handleChange}
          required
        />
        <label>Length (in meters):</label>
        <input
          type="number"
          name="length"
          value={formData.length}
          onChange={handleChange}
          required
        />
        <label>Breadth (in meters):</label>
        <input
          type="number"
          name="breadth"
          value={formData.breadth}
          onChange={handleChange}
          required
        />
        <label>Water Availability:</label>
        <select
          name="waterAvailability"
          value={formData.waterAvailability}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label>Sunlight Exposure:</label>
        <select
          name="sunlightExposure"
          value={formData.sunlightExposure}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label>Soil Type:</label>
        <select
          name="soilType"
          value={formData.soilType}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Sandy">Sandy</option>
          <option value="Loamy">Loamy</option>
          <option value="Clay">Clay</option>
          <option value="Peaty">Peaty</option>
          <option value="Chalky">Chalky</option>
        </select>
        <label>Soil Fertility:</label>
        <select
          name="soilFertility"
          value={formData.soilFertility}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Display success or error message */}
      {message && <p>{message}</p>}

      {/* Display suggested farming method */}
      {farmingMethod && <p><strong>Suggested Farming Method:</strong> {farmingMethod}</p>}
    </div>
  );
}

export default SpaceInput;
