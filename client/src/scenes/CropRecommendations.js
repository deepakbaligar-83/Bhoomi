import React, { useState } from 'react';
import axios from 'axios';
import Confetti from 'react-confetti';
import wheatImage from '../Assets/wheat.jpg';
import riceImage from '../Assets/rice.jpg';
import barleyImage from '../Assets/barley.jpg';
import maizeImage from '../Assets/maize.jpg';
import placeholderImage from '../Assets/croprec.avif'; // Add your placeholder image here
import sugarcaneImage from '../Images/sugarcane.avif';
import './CropRecommendation.css';

const CropRecommendations = () => {
  const [formData, setFormData] = useState({
    soil_ph: '',
    soil_moisture: '',
    temperature: '',
    rainfall: '',
    humidity: ''
  });

  const [recommendedCrop, setRecommendedCrop] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cropImage, setCropImage] = useState(placeholderImage);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShowConfetti(false);

    try {
      const response = await axios.post('http://127.0.0.1:5000/recommend', formData);
      setRecommendedCrop(response.data.recommended_crop);

      switch (response.data.recommended_crop) {
        case 'Wheat':
          setCropImage(wheatImage);
          break;
        case 'Rice':
          setCropImage(riceImage);
          break;
        case 'Barley':
          setCropImage(barleyImage);
          break;
        case 'Maize':
          setCropImage(maizeImage);
          break;
        case 'Sugarcane':
        setCropImage(sugarcaneImage)
        break;
        default:
          setCropImage(placeholderImage);
      }
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
    } catch (error) {
      setError('Error fetching recommendation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      soil_ph: '',
      soil_moisture: '',
      temperature: '',
      rainfall: '',
      humidity: ''
    });
    setRecommendedCrop('');
    setError('');
    setCropImage(placeholderImage);
    setShowConfetti(false);
  };

  return (
    <div className="crop-recommendation-container">
      <div className="confetti-container">{showConfetti &&  (
          <Confetti
            numberOfPieces={400}
            gravity={0.2}
            wind={0.01}
            recycle={false}
          />
        )}</div>
      <h1 className='crhp1'>Crop Recommendation System</h1>
      <div className="form-and-result-container">
        <form className="recommendation-form" onSubmit={handleSubmit}>
          <label>
            Soil pH:
            <input className='crop-input' type="number" name="soil_ph" value={formData.soil_ph} onChange={handleChange} />
          </label><br />
          <label>
            Soil Moisture:
            <input  className='crop-input' type="number" name="soil_moisture" value={formData.soil_moisture} onChange={handleChange} />
          </label><br />
          <label>
            Temperature:
            <input  className='crop-input' type="number" name="temperature" value={formData.temperature} onChange={handleChange} />
          </label><br />
          <label>
            Rainfall:
            <input  className='crop-input' type="number" name="rainfall" value={formData.rainfall} onChange={handleChange} />
          </label><br />
          <label>
            Humidity:
            <input  className='crop-input' type="number" name="humidity" value={formData.humidity} onChange={handleChange} />
          </label><br />
          <div style={{ display: 'flex' }}>
            <button className='recommendsubmit' type="submit" disabled={loading}>Get Recommendation</button>
            <button className="clear-button" type="button" onClick={handleClear}>Clear</button>
          </div>
        </form>
        <div className="result-container">
          <h2>{recommendedCrop ? `Recommended Crop: ${recommendedCrop}` : ''}</h2>
          <img src={cropImage} alt={recommendedCrop || 'placeholder'} className="crop-image" />
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CropRecommendations;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Confetti from 'react-confetti';
// import wheatImage from '../Assets/wheat.jpg';
// import riceImage from '../Assets/rice.jpg';
// import barleyImage from '../Assets/barley.jpg';
// import maizeImage from '../Assets/maize.jpg';
// import placeholderImage from '../Assets/croprec.avif'; // Add your placeholder image here
// import sugarcaneImage from '../Images/sugarcane.avif';
// import './CropRecommendation.css';

// const CropRecommendations = () => {
//   const [formData, setFormData] = useState({
//     soil_ph: '',
//     soil_moisture: '',
//     temperature: '',
//     rainfall: '',
//     humidity: ''
//   });

//   const [recommendedCrop, setRecommendedCrop] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [cropImage, setCropImage] = useState(placeholderImage);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [cropData, setCropData] = useState([]);

//   useEffect(() => {
//     // Fetch CSV data when the component mounts
//     fetchCropData();
//   }, []);

//   const fetchCropData = async () => {
//     try {
//       const response = await axios.get('D:/React/bhoomi/server/crop-recommendation/crop_recommendation.csv'); // Update the path
//       const csvData = response.data;
//       // Parse CSV data into an array of objects
//       const rows = csvData.split('\n');
//       const headers = rows[0].split(',');
//       const cropData = rows.slice(1).map(row => {
//         const values = row.split(',');
//         return headers.reduce((obj, header, index) => {
//           obj[header.trim()] = values[index].trim();
//           return obj;
//         }, {});
//       });
//       setCropData(cropData);
//     } catch (error) {
//       console.error('Error fetching crop data:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setShowConfetti(false);

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/recommend', formData);
//       setRecommendedCrop(response.data.recommended_crop);

//       switch (response.data.recommended_crop) {
//         case 'Wheat':
//           setCropImage(wheatImage);
//           break;
//         case 'Rice':
//           setCropImage(riceImage);
//           break;
//         case 'Barley':
//           setCropImage(barleyImage);
//           break;
//         case 'Maize':
//           setCropImage(maizeImage);
//           break;
//         case 'Sugarcane':
//           setCropImage(sugarcaneImage);
//           break;
//         default:
//           setCropImage(placeholderImage);
//       }
//       setShowConfetti(true);
//       setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
//     } catch (error) {
//       setError('Error fetching recommendation. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClear = () => {
//     setFormData({
//       soil_ph: '',
//       soil_moisture: '',
//       temperature: '',
//       rainfall: '',
//       humidity: ''
//     });
//     setRecommendedCrop('');
//     setError('');
//     setCropImage(placeholderImage);
//     setShowConfetti(false);
//   };

//   return (
//     <div className="crop-recommendation-container">
//       <div className="confetti-container">
//         {showConfetti && (
//           <Confetti numberOfPieces={400} gravity={0.2} wind={0.01} recycle={false} />
//         )}
//       </div>
//       <h1 className='crhp1'>Crop Recommendation System</h1>
//       <div className="form-and-result-container">
//         <form className="recommendation-form" onSubmit={handleSubmit}>
//           {/* Render input fields for form data */}
//         </form>
//         <div className="result-container">
//           {/* Display recommended crop and image */}
//           <h2>{recommendedCrop ? `Recommended Crop: ${recommendedCrop}` : ''}</h2>
//           <img src={cropImage} alt={recommendedCrop || 'placeholder'} className="crop-image" />
//         </div>
//       </div>
//       {loading && <p>Loading...</p>}
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// };

// export default CropRecommendations;
