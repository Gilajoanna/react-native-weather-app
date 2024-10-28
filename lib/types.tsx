import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  WeatherScreen: undefined;
  WeatherDetailScreen: { city: { name: string; weather: string } };
};

export type WeatherScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "WeatherScreen"
>;

export type WeatherDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "WeatherDetailScreen"
>;

export type WeatherDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "WeatherDetailScreen"
>;