import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const { current, loading ,error} = useSelector((state) => state.weatherReducer);

  if (loading) return <p className="p-10">Loading...</p>;
  if(error) return <p>{error}</p>
  if(!current) return null;

  return (
    <div>
      <div className="card text-xl bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{current.name}</h2>
          <p>Temperature : {(current.main.temp - 273).toFixed(1)} °C</p>
          <p>Humidity : {current.main.humidity}</p>
          <p>Pressure : {current.main.pressure}</p>
          <p>Weather : {current.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
