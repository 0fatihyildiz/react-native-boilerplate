import {View, Text} from 'react-native';
import React from 'react';
import {Iconify} from 'react-native-iconify';
import Divider from './src/components/ui/Divider';
import Button from './src/components/ui/Button';
export default function App() {
  return (
    <View className="flex flex-col h-full items-center justify-between py-5 bg-black">
      <Divider title="Ben Ferhat Geliyorum" />
      <View className="flex-row items-center justify-center">
        <Text className="text-white font-semibold text-2xl mr-2">App</Text>
        <Iconify icon="mdi:heart" size={24} color="#900" />
      </View>
      <Button title="Bana Tıkla" />
    </View>
  );
}
