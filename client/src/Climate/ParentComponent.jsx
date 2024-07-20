// import React, { useState, useEffect } from 'react';
// import Forecast from './Forecast';

// const ParentComponent = () => {
//   const [forecastData, setForecastData] = useState(null);

//   useEffect(() => {
    
//     const fetchData = async () => {
//       try {
//         const response = await fetch('your-api-endpoint');
//         const result = await response.json();
//         setForecastData(result); 
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {forecastData ? (
//         <Forecast title="Daily Forecast" data={forecastData} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ParentComponent;
