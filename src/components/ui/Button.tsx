import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = props => {
  const {title} = props;
  return (
    <TouchableOpacity className="w-11/12 py-3 flex items-center justify-center rounded-lg bg-white">
      <Text className="text-black font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
