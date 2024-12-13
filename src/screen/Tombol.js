import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';

const Tombol = () => {
  const [username, setUsername] = useState('');
  const [pasword, setPassword] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TextInput
        placeholder="Username"
        placeholderTextColor={'gray'}
        style={{color: 'black'}}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={'gray'}
        style={{color: 'black'}}
        value={pasword}
        onChangeText={setPassword}
      />
      <Button title="Login" disabled={username == '' || pasword == ''} />

      <TouchableOpacity
        disabled={username == '' || pasword == ''}
        style={{
          height: 50,
          width: '100%',
          backgroundColor: username == '' || pasword == '' ? 'gray' : 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: 500, color: 'white'}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tombol;
