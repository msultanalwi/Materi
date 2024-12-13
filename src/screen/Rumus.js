// ganti index aja


import React, {useState} from 'react';
import {
  View,
  Text,
  Linking,
} from 'react-native';

const App = () => {
  const [expand, setExpand] = useState(false);

  const handlerExpand = () => {
    setExpand(!expand);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: 'white',
          elevation: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
        }}>
        <Text style={{color: 'black'}}>Rumus persegi</Text>
        <Text style={{color: 'black'}} onPress={() => handlerExpand()}>
          {expand ? 'show less' : 'show all'}
        </Text>
      </View>
      {expand == true && (
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            elevation: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 12,
          }}>
          <Text
            style={{color: 'black'}}
            onPress={() => Linking.openURL('https://google.com')}>
            Rumus persegi adalah sisi dikali sisi lorem ipsum dolor amet lorem
            ipsum dolor amet
          </Text>
        </View>
      )}
    </View>
  );
};

export default App;
