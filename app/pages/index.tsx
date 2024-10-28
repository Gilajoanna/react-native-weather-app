import { useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getWeather } from "../../api/weatherApiService";
import { WeatherScreenNavigationProp } from "../../lib/types";

type NavigationProps = {
  navigation: WeatherScreenNavigationProp;
};

const WeatherScreen = ({ navigation }: NavigationProps) => {
  const cityList = [
    {
      name: "My Location",
      weather: "12°",
    },
    {
      name: "London",
      weather: "16°",
    },
    {
      name: "Berlin",
      weather: "10°",
    },
  ];

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getWeather();
        console.log(data);
      } catch (error) {
        console.log("Debug: Could not fetch weather data with error: ", error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {cityList.map((city) => (
          <Pressable
            key={city.name}
            onPress={() => navigation.navigate("WeatherDetailScreen", { city })}
            style={styles.listContainer}
          >
            <Text style={styles.listItemText}>{city.name}</Text>
            <Text style={styles.listItemText}>{city.weather}</Text>
          </Pressable>
        ))}
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
