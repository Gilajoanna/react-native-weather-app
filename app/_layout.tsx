import WeatherDetailScreen from "@/app/WeatherDetailScreen";
import { RootStackParamList } from "@/lib/types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherScreen from "./index";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name="WeatherScreen"
          component={WeatherScreen}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="WeatherDetailScreen"
          component={WeatherDetailScreen}
          options={{ title: "Weather details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
