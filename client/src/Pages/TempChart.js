import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './TempChart.css';
import { MdOutlineWaterDrop } from "react-icons/md";
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';

ChartJS.register(ArcElement, Tooltip, Legend);

function TempChart() {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Changed to false by default
    const [currentDate, setCurrentDate] = useState('');
    const [currentWeek, setCurrentWeek] = useState('');
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const fetchWeatherData = async () => {
            setIsLoading(true); // Set loading to true while fetching data
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=Hubli&units=metric&appid=f3635cc9b3ba1b949b15fd11912b1c70`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
            setIsLoading(false); // Set loading to false after fetching data
        };

        fetchWeatherData();

        // Get current date, week, and month
        const currentDateObj = new Date();
        setCurrentDate(currentDateObj.getDate());
        setCurrentWeek(currentDateObj.toLocaleDateString('en-US', { weekday: 'long' }));
        setCurrentMonth(currentDateObj.toLocaleDateString('en-US', { month: 'long' }));
    }, []);

    if (!weatherData) {
        return null; // Render nothing if weatherData is null initially
    }

    const { main, rain, wind } = weatherData;
    const temperature = main.temp;
    const pressure = main.pressure;
    const rainfall = rain ? rain['1h'] || rain['3h'] || 0 : 0;
    const windSpeed = wind ? wind.speed : 0;

    const data = {
        labels: [],
        datasets: [{
            data: [temperature, 100 - temperature],
            backgroundColor: ['#b8e62c', '#132a13'],
            borderColor: ['#b8e62c', '#132a13'],
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="chart-container">
            <div style={{ display: 'flex', width: '220px', height: '220px', marginBottom: '20px', marginLeft: '50px' }}>
                <div>
                    <div className="date-info">
                        <p className='wp'>Weather's Today</p>
                        <div className='week'>{currentWeek}</div>
                        <div className='date'>
                            <div> {currentDate}, </div>
                            <div style={{ marginLeft: '2px' }}>  {currentMonth}</div>
                        </div>
                    </div>
                    <div className='tempch1'>
                        {temperature}°C
                    </div>
                    <p className='tempp1'>Hubli</p>
                </div>
                <Doughnut data={data} options={options}></Doughnut>
                <div className='inside'>
                    <p className='tempy'>
                        {temperature}°C
                    </p>
                    <p style={{ marginLeft: '-8px', fontSize: '14px', color: '#B4B4B8', marginTop: '-4px' }}>Room temp</p>
                </div>
            </div>
            <div className="weather-data">
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                    <MdOutlineWaterDrop className='ictp' />
                    <div className='w'>{rainfall} mm</div>
                </div>
                <div className='w1'><WaterIcon className='ictp1' /> {pressure} hPa</div>
                <div className='w1'><AirIcon className='ictp1' /> {windSpeed} m/s</div>
            </div>
        </div>
    );
}

export default TempChart;
