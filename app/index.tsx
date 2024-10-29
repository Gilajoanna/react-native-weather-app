import { fetchWeatherData } from "@/api/weatherApiService";
import { WeatherResponse, formatTime, roundedMainWeather } from "@/lib/data";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { WeatherScreenNavigationProp } from "../lib/types";

type NavigationProps = {
  navigation: WeatherScreenNavigationProp;
};

const WeatherScreen = ({ navigation }: NavigationProps) => {
  const [weatherData, setWeatherData] = useState<WeatherResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityList = await fetchWeatherData();
        setWeatherData(cityList ?? []);
      } catch (error) {
        console.log("Debug: Could not fetch weather data with error: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {weatherData && weatherData.length > 0 ? (
          weatherData.map(
            (city: WeatherResponse) => (
              (city.main = roundedMainWeather(city.main)),
              (
                <Pressable
                  testID="pressable"
                  key={city.id}
                  onPress={() =>
                    navigation.navigate("WeatherDetailScreen", {
                      city: {
                        name: city.name,
                        weather: city.weather[0].description,
                        temp: city.main.temp,
                        temp_min: city.main.temp_min,
                        temp_max: city.main.temp_max,
                        feels_like: city.main.feels_like,
                        sunrise: formatTime(city.sys.sunrise),
                        sunset: formatTime(city.sys.sunset),
                        humidity: city.main.humidity,
                      },
                    })
                  }
                  style={styles.listContainer}
                >
                  <Text testID="cityName" style={styles.listItemText}>
                    {city.name}
                  </Text>
                  <Text testID="cityTemp" style={styles.listItemText}>
                    {city.main.temp}°C
                  </Text>
                </Pressable>
              )
            )
          )
        ) : (
          <Text>Could not fetch weather data.</Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
  },
  listItemText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});
