import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WeatherDetailScreenRouteProp } from "../lib/types";

type NavigationProps = {
  route: WeatherDetailScreenRouteProp;
};

export default function WeatherDetailScreen({ route }: NavigationProps) {
  const { city } = route.params;

  return (
    <View style={styles.container}>
      <Text>{city.name}</Text>
      <Text>{city.weather}</Text>
      <Text>{city.temp}°C</Text>
      <Text>{city.temp_min}°C</Text>
      <Text>{city.temp_max}°C</Text>
      <Text>{city.sunrise}</Text>
      <Text>{city.sunset}</Text>
      <Text>{city.humidity}%</Text>
      <Text>{city.feels_like}°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
  },
});
