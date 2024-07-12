import {View, Text} from 'react-native';
import React from 'react';
import Divider from 'react-native-divider';

const Dividerc = props => {
  return (
    <View className="w-full">
      <Divider borderColor="#fff" color="#fff" orientation="center">
        {props.title}
      </Divider>
    </View>
  );
};

export default Dividerc;
