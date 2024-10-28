import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LandList = () => {
    const [lands, setLands] = useState([]);

    useEffect(() => {
        const fetchLands = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/lands');
                setLands(response.data);
            } catch (error) {
                console.error('Error fetching lands:', error);
            }
        };

        fetchLands();
    }, []);

    return (
        <div>
            <h3>Available Lands</h3>
            <ul>
                {lands.map((land) => (
                    <li key={land._id}>
                        <p>Type: {land.type}</p>
                        <p>Area: {land.area}</p>
                        <p>Location: {land.location}</p>
                        <p>Contact: {land.contactDetails}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LandList;
