import React from 'react';
import {View, Text} from 'react-native';

const Boot = ({size = 40, color = 'blue', weight = 'bold'}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: size,
          color: color,
          fontWeight: weight,
        }}>
        Boot already used
      </Text>
    </View>
  );
};

export default Boot;
