import { WeatherResponse } from "@/lib/data";
import axios from "axios";

const API_KEY = "242dcd9af76441f6a781a38ac435048a";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async () => {
  try {
    const response = await axios.get<WeatherResponse>(`${BASE_URL}`, {
      params: {
        q: "London",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Debug: Could not fetch weather data with error: ", error);
  }
};
