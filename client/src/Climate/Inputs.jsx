import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)} // Fix typo here
          type="text"
          placeholder="Search your place"
          className="text-gray-500 text-xl font-light p-1 w-96  rounded-sm shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearch
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-white text-2xl font-medium transition ease-out hover:scale-125"
        onClick={() => setUnits("metric")}>
          °C
        </button>
        <p className="text-white text-2xl font-medium mx-1">|</p>
        <button className="text-white text-2xl font-medium transition ease-out hover:scale-125"
        onClick={() => setUnits("imperial")}>
        
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
