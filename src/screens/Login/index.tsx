import { View, Text, TextInput, Button, Pressable } from 'react-native';
import React, { useState } from 'react';
import { ROUTES } from '../../routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
  console.log(props);
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const onLogin = async () => {
    try {
      const a = await AsyncStorage.getItem(username);
      const user = JSON.parse(a);
      if (username === user.user && pass === user.pass) {
        props.setIsLoggedIn(true);
      }
    } catch (error) {
      console.log('Error during login:', error);
      // Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi cho người dùng)
    }
  };

  return (
    <View>
      <Text>Dang nhap</Text>
      <TextInput
        style={{ backgroundColor: '#EEEEEE' }}
        onChangeText={setUsername}
      />
      <Text>Mat khau</Text>
      <TextInput
        style={{ backgroundColor: '#EEEEEE' }}
        onChangeText={setPass}
      />
      <Button title="Dang nhap" onPress={onLogin} />
      <Pressable
        onPress={() => {
          props.navigation.navigate(ROUTES.REGISTER);
        }}>
        <Text>Dang ky tai khoan</Text>
      </Pressable>
    </View>
  );
};

export default Login;
