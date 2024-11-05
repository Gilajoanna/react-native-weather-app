import { WeatherResponse } from "@/lib/data";
import axios from "axios";

const API_KEY = "242dcd9af76441f6a781a38ac435048a";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async () => {
  const cityList: WeatherResponse[] = [];

  try {
    const results = await Promise.all([
      getWeather("Oslo"),
      getWeather("London"),
      getWeather("Berlin"),
    ]);

    results.forEach((result) => {
      if (result !== undefined) {
        cityList.push(result);
      }
    });
    return cityList;
  } catch (error) {
    console.log("Debug: Could not get weather data with error: ", error);
  }
};

const getWeather = async (city: string) => {
  try {
    const response = await axios.get<WeatherResponse>(`${BASE_URL}`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Debug: Could not fetch weather data with error: ", error);
  }
};
