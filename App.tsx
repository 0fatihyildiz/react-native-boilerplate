import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {Iconify} from 'react-native-iconify';
import Divider from './src/components/ui/Divider';
import Button from './src/components/ui/Button';
import Input from './src/components/ui/Input';
import TextArea from './src/components/ui/TextArea';
export default function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [Description, setDescription] = useState('');

  const handleButtonPress = () => {
    Alert.alert(
      `UserName: ${userName}`,
      `Password: ${password} Description: ${Description}`,
    );
    setUserName('');
    setPassword('');
    setDescription('');
  };

  return (
    <View className="flex flex-col h-full items-center justify-around py-5 bg-black">
      <Divider title="Ben Ferhat Geliyorum" />
      <View className="flex-row items-center justify-center">
        <Text className="text-white font-semibold text-2xl mr-2">App</Text>
        <Iconify icon="mdi:heart" size={24} color="#900" />
      </View>
      <View className="flex-col w-full items-center justify-around">
        <Input
          value={userName}
          placeholder="User Name"
          onChangeText={setUserName}
        />
        <Input
          value={password}
          placeholder="Password"
          passwordType={true}
          onChangeText={setPassword}
        />
        <TextArea
          placeholder="Description"
          onChangeText={setDescription}
          value={Description}
        />
      </View>
      <Button onPress={handleButtonPress} title="Bana Tıkla" />
    </View>
  );
}
