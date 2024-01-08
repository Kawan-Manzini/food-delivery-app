import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import { featured } from "../constants";
import FeaturedRow from "../components/featuredRow";

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
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full bg-gray-300"
        >
          <Ionicons name="cog" size={27} color="white" />
        </View>
      </View>

       {/* main */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* caregories */}
        <Categories />

        {/* featured */}
        <View className='mt-5'>
          {
            [featured, featured, featured].map((item, index) => {
              return (
                <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description} />
              )
            })
          }
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
