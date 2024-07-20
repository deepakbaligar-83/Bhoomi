import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import './ProductionComparisonChart.css';

import { Chart as ChartJS, 
    BarElement, 
    CategoryScale,
    LinearScale,
    Tooltip, 
    Legend } from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const ProductionComparisonChart = () => {
    const [selectedCrop, setSelectedCrop] = useState('wheat'); // Set 'wheat' as default selectedCrop

    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
            label: 'Last Year - Wheat',
            data: [100, 120, 150, 130, 140, 160, 170, 180, 190, 200, 210, 220], // Example data for last year - Wheat
            backgroundColor: '#132a13',
        },
        {
            label: 'Current Year - Wheat',
            data: [120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230], // Example data for current year - Wheat
            backgroundColor: '#b8e62c',
        },
        {
            label: 'Last Year - Sugarcane',
            data: [80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190], // Example data for last year - Sugarcane
            backgroundColor: '#132a13',
        },
        {
            label: 'Current Year - Sugarcane',
            data: [90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], // Example data for current year - Sugarcane
            backgroundColor: '#b8e62c',
        },
        {
            label: 'Last Year - Rice',
            data: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170], // Example data for last year - Rice
            backgroundColor: '#132a13',
        },
        {
            label: 'Current Year - Rice',
            data: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180], // Example data for current year - Rice
            backgroundColor: '#b8e62c',
        },
      ]
    };

    const options ={
        scales: {
            x: { 
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    };

    const handleCropChange = (event) => {
        setSelectedCrop(event.target.value);
    };

    useEffect(() => {
        // Update the selectedCrop state based on localStorage on component mount
        const savedCrop = localStorage.getItem('selectedCrop');
        if (savedCrop) {
            setSelectedCrop(savedCrop);
        }
    }, []);

    useEffect(() => {
        // Save selectedCrop to localStorage whenever it changes
        localStorage.setItem('selectedCrop', selectedCrop);
    }, [selectedCrop]);

    return (
        <div className="container">
            <select style={{backgroundColor:'azure',marginLeft:'1px',marginBottom:'70px'}} onChange={handleCropChange} value={selectedCrop}>
                <option value="wheat">Wheat</option>
                <option value="sugarcane">Sugarcane</option>
                <option value="rice">Rice</option>
            </select>
            {selectedCrop && (
                <div style={{marginTop:'-75px',marginLeft:'-30px'}}>
                    
                    <div style={{width: '620px', height: '310px',marginBottom:'20px',marginLeft:'50px',marginTop:'-70px'}}>
                    <Bar
                        data={{ 
                            labels: data.labels,
                            datasets: data.datasets.filter(dataset => dataset.label.toLowerCase().includes(selectedCrop))
                        }}
                        options={options}
                    />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductionComparisonChart;
