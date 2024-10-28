/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */

import { WeatherScreenNavigationProp } from "@/lib/types";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import WeatherScreen from "..";
import { fetchWeatherData } from "../../api/weatherApiService";

jest.mock("../../api/weatherApiService", () => ({
  fetchWeatherData: jest.fn(),
}));

const navigationProp = jest.fn() as unknown as WeatherScreenNavigationProp;

describe("WeatherScreen", () => {
  it("navigate to WeatherDetailScreen", async () => {
    const push = jest.fn();
    const { getByTestId } = render(
      <WeatherScreen navigation={navigationProp} />
    );

    fireEvent.press(getByTestId("pressable"));
    expect(push).toHaveBeenCalledWith("WeatherDetailScreen");
  });

  it("Render weather data from Api", async () => {
    (fetchWeatherData as jest.Mock).mockResolvedValue([
      {
        coord: { lon: 10.75, lat: 59.91 },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        main: {
          temp: 25,
          feels_like: 23.9,
          temp_min: 20.0,
          temp_max: 25.0,
          pressure: 1012,
          humidity: 56,
        },
        wind: { speed: 3.5, deg: 270 },
        clouds: { all: 0 },
        dt: 1625838000,
        sys: { country: "NO", sunrise: 1625793600, sunset: 1625851200 },
        timezone: 7200,
        id: 3143244,
        name: "Oslo",
        cod: 200,
      },
    ]);

    const { getByTestId } = render(
      <WeatherScreen navigation={navigationProp} />
    );

    await waitFor(() => {
      const cityName = getByTestId("cityName");
      const cityTemp = getByTestId("cityTemp");

      expect(cityName.props.children).toBe("Oslo");
      expect(cityTemp.props.children).toBe(25);
    });
  });
});
