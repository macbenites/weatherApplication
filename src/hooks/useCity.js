import { Context } from "../Context";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API = "4ae2636d8dfbdc3044bede63951a019b";

export const useCityById = (id) => {
  const [city, setCity] = useState([]);
  const searchCityById = async (id) => {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API}&units=metric`
    );
    const { data } = response;
    setCity({
      min: Math.round(data?.main.temp_min),
      max: Math.round(data?.main.temp_max),
      img: data?.weather[0].icon,
      id: data?.id,
      wind: data?.wind.speed,
      temp: data?.main.temp,
      name: data?.name,
      weather: data?.weather[0].main,
      description: data?.weather[0].description,
      clouds: data?.clouds.all,
      latitud: data?.coord.lat,
      longitud: data?.coord.lon,
      pressure: data?.main.pressure,
      humidity: data?.main.humidity,
      country: data?.sys.country,
    });
  };
  useEffect(() => {
    toast.promise(searchCityById(id), {
      loading: "Loading",
      success: "Got the data",
      error: "City not found",
    });
  }, [id]);
  return city;
};

export const useCityByName = () => {
  const { handleCities } = useContext(Context);

  const searchCity = async (city) => {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    );

    const { data } = response;
    handleCities({
      min: Math.round(data?.main.temp_min),
      max: Math.round(data?.main.temp_max),
      img: data?.weather[0].icon,
      id: data?.id,
      wind: data?.wind.speed,
      temp: data?.main.temp,
      name: data?.name,
      weather: data?.weather[0].main,
      description: data?.weather[0].description,
      clouds: data?.clouds.all,
      latitud: data?.coord.lat,
      longitud: data?.coord.lon,
      pressure: data?.main.pressure,
      humidity: data?.main.humidity,
      country: data?.sys.country,
    });
  };

  return { searchCity };
};
