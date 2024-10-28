import { WeatherResponse } from "@/lib/data";
import axios from "axios";

const API_KEY = "242dcd9af76441f6a781a38ac435048a";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

type CityWeather = {
  myLocationData: WeatherResponse | undefined;
  londonData: WeatherResponse | undefined;
  berlinData: WeatherResponse | undefined;
};

const cityList: CityWeather[] = [];

export const fetchWeatherData = async () => {
  try {
    const myLocationData = await getWeather("Oslo");
    const londonData = await getWeather("London");
    const berlinData = await getWeather("Berlin");

    cityList.push({
      myLocationData,
      londonData,
      berlinData,
    });
    console.log(cityList);
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
      },
    });
    return response.data;
  } catch (error) {
    console.log("Debug: Could not fetch weather data with error: ", error);
  }
};
