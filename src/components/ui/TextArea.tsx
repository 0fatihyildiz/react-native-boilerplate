import {View, TextInput} from 'react-native';
import React from 'react';

interface TextAreaProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View className="w-11/12 my-3 align-top h-28 px-3 border-2 border-white rounded-xl overflow-y-auto">
      <TextInput
        style={{textAlignVertical: 'top'}}
        className="h-28 text-white font-semibold overflow-y-auto"
        multiline
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="white"
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextArea;
