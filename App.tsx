import {View, Text} from 'react-native';
import React from 'react';
import {Iconify} from 'react-native-iconify';
export default function App() {
  return (
    <View className="flex flex-row h-screen items-center justify-center bg-black">
      <Text className="text-white font-semibold text-2xl">App</Text>
      <Iconify icon="mdi:heart" size={24} color="#900" />
    </View>
  );
}
