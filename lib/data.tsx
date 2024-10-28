export type WeatherResponse = {
  coord: Coordinates;
  weather: WeatherDescription[];
  main: MainWeather;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type Coordinates = {
  lon: number;
  lat: number;
};

export type WeatherDescription = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Wind = {
  speed: number;
  deg: number;
};

export type Clouds = {
  all: number;
};

export type Sys = {
  country: string;
  sunrise: number;
  sunset: number;
};
