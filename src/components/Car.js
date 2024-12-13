import React from 'react';
import {Text} from 'react-native';

// props kita isi agar dinamis contohnya size, color, weight.
const Car = ({
  size = 14,
  color = 'black',
  weight = 'bold' /* ini default */,
}) => {
  return (
    <Text style={{fontSize: size, color: color, fontWeight: weight}}>
      This is car
    </Text>
  );
};

export default Car;
