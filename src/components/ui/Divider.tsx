import React from 'react';
import {View} from 'react-native';
import Divider from 'react-native-divider';

interface DividercProps {
  borderColor?: string;
  color?: string;
  orientation?: 'center' | 'left' | 'right';
  title: string;
}

const Dividerc: React.FC<DividercProps> = props => {
  const {borderColor, color, orientation, title} = props;

  return (
    <View className="w-full">
      <Divider
        borderColor={borderColor || '#fff'}
        color={color || '#fff'}
        orientation={orientation || 'center'}>
        {title}
      </Divider>
    </View>
  );
};

export default Dividerc;
