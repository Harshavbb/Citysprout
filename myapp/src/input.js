// SpaceInput.js
import React, { useState } from 'react';
import './input.css';

function SpaceInput() {
  const [formData, setFormData] = useState({
    length: '',
    breadth: '',
    waterAvailability: '',
    sunlightExposure: '',
    soilType: '',
    soilFertility: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to the server or validate input.
    console.log(formData);
  };

  return (
    <div className='inputdiv'>
      <h2 className='inputh2'>Space Input Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="length">Length (in meters):</label>
          <input
            type="number"
            id="length"
            name="length"
            value={formData.length}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="breadth">Breadth (in meters):</label>
          <input
            type="number"
            id="breadth"
            name="breadth"
            value={formData.breadth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="waterAvailability">Water Availability (in liters):</label>
          <input
            type="number"
            id="waterAvailability"
            name="waterAvailability"
            value={formData.waterAvailability}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sunlightExposure">Sunlight Exposure (hours per day):</label>
          <input
            type="number"
            id="sunlightExposure"
            name="sunlightExposure"
            value={formData.sunlightExposure}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="soilType">Type of Soil:</label>
          <select
            id="soilType"
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            required
          >
            <option value="">Select soil type</option>
            <option value="sandy">Sandy</option>
            <option value="clay">Clay</option>
            <option value="loamy">Loamy</option>
            <option value="silty">Silty</option>
            <option value="peaty">Peaty</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="soilFertility">Fertility of Soil (low, medium, high):</label>
          <select
            id="soilFertility"
            name="soilFertility"
            value={formData.soilFertility}
            onChange={handleChange}
            required
          >
            <option value="">Select fertility level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SpaceInput;
