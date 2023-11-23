import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className=" bg-gray-700 h-full">
      <View className="flex items-center    mt-14">
        <Text className="text-3xl text-center text-white">
          Welcome to Charm Shop!
        </Text>
        <Text className="text-white">
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
