import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
  onPress: Function | any;
}

const Button: React.FC<ButtonProps> = props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-11/12 py-3 flex items-center justify-center rounded-xl bg-white">
      <Text className="text-black font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
