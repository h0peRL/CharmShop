import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className=" bg-gray-700 h-full">
      <View className="flex items">
        <Text className="text-4xl text-white">Welcome to Charm Shop!</Text>
        <Text className="text-white">
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
