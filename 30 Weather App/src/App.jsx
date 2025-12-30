import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./Store/Action/weatherAction";
import Searchbar from "./components/Searchbar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastDetails from "./components/ForecastDetails";

const App = () => {
  const city = useSelector((state) => state.weatherReducer.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, []);

  return (
    <div className="flex items-center justify-center flex-col gap-7 p-20">
      <Searchbar />
      <CurrentWeather />
      <ForecastDetails />
    </div>
  );
};

export default App;
