import {View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Iconify} from 'react-native-iconify';

interface InputProps {
  placeholder: string;
  value: string;
  passwordType?: boolean;
  onChangeText: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  passwordType = false,
  onChangeText,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(passwordType);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="border-2 flex-row items-center justify-between border-white w-11/12 px-3 rounded-xl">
      <TextInput
        secureTextEntry={passwordType && isPasswordVisible}
        className="text-white font-semibold placeholder:text-white flex-1"
        placeholderTextColor="#fff"
        value={value}
        placeholder={placeholder || 'placeholder'}
        onChangeText={onChangeText}
      />
      {passwordType && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {isPasswordVisible && (
            <Iconify icon="mdi:eye-off" size={24} color="#fff" />
          )}
          {!isPasswordVisible && (
            <Iconify icon="mdi:eye" size={24} color="#fff" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
