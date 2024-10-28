// src/components/AddLand.js

import React, { useState } from 'react';
import axios from 'axios';

const AddLand = () => {
  const [formData, setFormData] = useState({
    type: '',
    area: '',
    location: '',
    contactDetails: '',
  });

  const { type, area, location, contactDetails } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/lands', formData);
      console.log(res.data);
      // Reset form fields
      setFormData({
        type: '',
        area: '',
        location: '',
        contactDetails: '',
      });
    } catch (err) {
      console.error('Error adding land:', err);
    }
  };

  return (
    <div>
      <h3>Add Land</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Type of Land:</label>
          <input type="text" name="type" value={type} onChange={onChange} required />
        </div>
        <div>
          <label>Area of Land:</label>
          <input type="number" name="area" value={area} onChange={onChange} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={location} onChange={onChange} required />
        </div>
        <div>
          <label>Contact Details:</label>
          <input type="text" name="contactDetails" value={contactDetails} onChange={onChange} required />
        </div>
        <button type="submit">Add Land</button>
      </form>
    </div>
  );
};

export default AddLand;
