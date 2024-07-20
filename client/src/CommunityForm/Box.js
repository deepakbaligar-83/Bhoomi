import React, { useEffect, useState } from 'react';
import { getAllInfodata } from '../backendservice';
import './Box.css';

const Box = () => {

  const [sustainabilityData, setsustainabilityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllInfodata();
        setsustainabilityData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const governmentSchemes = sustainabilityData.filter(item => (
    item.title.startsWith('Government Scheme')
  ));

  const otherInfo = sustainabilityData.filter(item => (
    !item.title.startsWith('Government Scheme')
  ));

  return (
    <div className='box-boxco'>
     
      
      <h2 className='titred'>Government Schemes</h2>
      {governmentSchemes.map(item => (
        <div key={item.id} className="info-box government-scheme">
          <h2 className='courseh2'>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}

      <h2 className='titred'>Farming Tips & Tricks</h2>
      {otherInfo.map(item => (
        <div key={item.id} className="info-box other-info">
          <h2 className='courseh2'>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Box;
