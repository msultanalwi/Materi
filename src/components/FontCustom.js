import React from 'react';
import {Text, View} from 'react-native';

const FontCustom = ({ukuran = 40, warna = 'green', tebal = 'bold'}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: ukuran,
          color: warna,
          fontWeight: tebal,
        }}>
        Font Custom
      </Text>
    </View>
  );
};
export default FontCustom;
