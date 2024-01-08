import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { useRoute } from "@react-navigation/native";
import { themeColors } from "../theme";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";

export default function RestaurantScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();

  return (
    <View>
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Ionicons
              name="ios-arrow-undo-circle-outline"
              size={25}
              color={`${themeColors.bgColor(1)}`}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <Text className="text-3xl font-bold">{item.name}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Text className="text-xs">
                <Text className="text-green-700">{item.stars}</Text>
                <Text className="text-gray-700">
                  ({item.reviews} review) ∘{" "}
                  <Text className="font-semibold">{item.category}</Text>
                </Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Ionicons name="map-outline" size={20} color="gray" />
              <Text className="text-gray-700 text-xs">
                Nearby: {item.address}
              </Text>
            </View>
          </View>
          <Text className='text-gray-500 mt-2'>{item.description}</Text>
        </View>
        <View className='pb-36 bg-white'>
            <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
            {/* disnes */}
            {
              item.dishes.map((dish, index) => <DishRow item={{...dish}} key={{index}}/>)
            }
        </View>
      </ScrollView>
    </View>
  );
}
