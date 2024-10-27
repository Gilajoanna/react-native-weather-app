import WeatherDetailScreen from "@/components/WeatherDetailScreen";
import { RootStackParamList } from "@/lib/types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherScreen from "./pages/index";

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
          options={{ title: "Weather detils" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
