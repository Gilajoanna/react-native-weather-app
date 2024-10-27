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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
  },
});
