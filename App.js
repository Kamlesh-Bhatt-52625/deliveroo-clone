import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackNavigator from "./src/navigator/Navigation";
import { useTailwind } from "tailwindcss-react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <HomeStackNavigator/>
      </TailwindProvider>
    </NavigationContainer>
  );
}
