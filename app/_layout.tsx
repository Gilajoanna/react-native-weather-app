import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherScreen from "./pages/index";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
