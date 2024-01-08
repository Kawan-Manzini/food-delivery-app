import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Ionicons name="search" size={25} color="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border border-1-2 pl-2 border-gray-50">
            <Ionicons name="map-outline" size={20} color="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View className='p-3 rounded-full bg-gray-300'>
            <Ionicons name="cog" size={20} color="gray" />

        </View>
      </View>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
}
