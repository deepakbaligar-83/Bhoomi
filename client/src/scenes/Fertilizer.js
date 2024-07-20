import React, { useState, useEffect } from 'react';
import fertilizerData from '../csv/fertilizer.json'; // Assuming you have the fertilizer data in a JSON file
import './Fertilizer.css'; // Import your CSS file

const FertilizerComponent = () => {
  const [userInput, setUserInput] = useState({ N: 0, P: 0, K: 0, pH: 0.0 }); // Default pH value set to 7.0
  const [recommendedFertilizer, setRecommendedFertilizer] = useState('');

  // Function to recommend fertilizer based on user inputs
  const recommendFertilizer = () => {
    const { N, P, K, pH } = userInput;
    const matchingFertilizers = fertilizerData.filter(entry => {
      return N >= entry.N && P >= entry.P && K >= entry.K && Math.abs(pH - entry.pH) <= 0.1; // Match pH within a range of 0.1
    });

    if (matchingFertilizers.length > 0) {
      setRecommendedFertilizer(matchingFertilizers[0].Fertilizer); // Set the recommended fertilizer
    } else {
      setRecommendedFertilizer('No matching fertilizer found');
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInput(prevState => ({ ...prevState, [name]: parseFloat(value) || 0 }));
  };

  return (
    <div className="fertilizer-container">
      <h2 className="fertilizer-title">Fertilizer Recommendations</h2>
      <form className="fertilizer-form" onSubmit={e => { e.preventDefault(); recommendFertilizer(); }}>
        <label>
          Nitrogen (N):
          <input type="number" name="N" value={userInput.N} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Phosphorus (P):
          <input type="number" name="P" value={userInput.P} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Potassium (K):
          <input type="number" name="K" value={userInput.K} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Potenial of Hydrogen (pH):
          <input type="number" step="0.1" name="pH" value={userInput.pH} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit" className="recommend-button">Recommend</button>
      </form>
      <div className="recommended-fertilizer">
        Recommended Fertilizer: {recommendedFertilizer}
      </div>
    </div>
  );
};

export default FertilizerComponent;
