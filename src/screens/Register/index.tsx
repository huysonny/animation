import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTES } from '../../routes';

const Register = props => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const onRegister = async () => {
    const user = {
      user: username,
      pass: pass,
    };
    await AsyncStorage.setItem(username, JSON.stringify(user));
    props.navigation.navigate(ROUTES.LOGIN);
  };

  return (
    <View>
      <Text>Ten dang nhap</Text>
      <TextInput
        style={{ backgroundColor: '#EEEEEE' }}
        onChangeText={setUsername}
      />
      <Text>Mat khau</Text>
      <TextInput
        style={{ backgroundColor: '#EEEEEE' }}
        onChangeText={setPass}
      />
      <Button title="Dang ky" onPress={onRegister} />
    </View>
  );
};

export default Register;
