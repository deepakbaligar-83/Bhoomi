import React, { useState, useEffect } from "react";
import TopButtons from './TopButtons';
import Inputs from './Inputs';
import TimeAndLocation from "./TimeAndLocation";
import TempAndDetails from "./TempAndDetails";
import Forecast from "./Forecast";
import { getFormattedWeatherData } from "../Services/weatherServices"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Climate = () => {
  const [query, setQuery] = useState({ q: "dharwad" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const cityName = query.q ? query.q : "current location";
      toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

      try {
        const data = await getFormattedWeatherData({ ...query, units });
        setWeather(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';

    const temp = weather.temp;
    let gradient;

    if (units === "metric") {
      if (temp < 20) {
        gradient = 'from-cyan-600 to-blue-700';
      } else if (temp >= 20 && temp <= 30) {
        gradient = 'from-green-950 to-green-900';
      } else {
        gradient = 'from-yellow-600 to-orange-700';
      }
    } else {
      // Assume units are imperial (Fahrenheit)
      if (temp < 68) {
        gradient = 'from-cyan-600 to-blue-700';
      } else if (temp >= 68 && temp <= 86) {
        gradient = 'from-green-600 to-green-700';
      } else {
        gradient = 'from-yellow-600 to-orange-700';
      }
    }

    return gradient;
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto  ">
      <div className={`relative mt-20 py-3 shadow-xl ml-4 bg-gradient-to-br ${formatBackground()} rounded-md`} style={{marginTop : "230px",marginLeft:"435px" ,marginBottom:"50px",width: "900px", padding: "20px" }}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} units={units} />
            <Forecast title='3 hour step forecast' data={weather.hourly} />
            <Forecast title='daily forecast' data={weather.daily} />
          </>
        )}
      </div>
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored"/>
    </div>
  );
}

export default Climate;
