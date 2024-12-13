import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const Walk = ({
  ketebalan = 'bold',
  besaran = 20,
  warna = 'pink',
  judulKustom = 'jalanin aja',
}) => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontWeight: ketebalan,
            title: judulKustom,
            fontSize: besaran,
            color: warna,
          }}>
          Walking Around Away
        </Text>
      </View>
    </ScrollView>
  );
};
