
const Forecast = ({ title, data }) => {
  // Default to an empty array if data is undefined or not an array
  // const forecastData = Array.isArray(data) ? data : [];

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex items-center justify-between">
        {data.map((d, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <p className="text-white font-light text-sm">{d.title}</p>
            <img
              src={d.icon}
              alt="weather icon"
              className="w-1/2 my-1"
            />
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
