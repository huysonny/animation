import { View, Text, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { ROUTES } from '../../routes';

const Home = props => {
  console.log('home props', props);
  const toAccount = () => {
    props.navigation.navigate(ROUTES.ACCOUNT);
  };

  return (
    <View>
      <Text>Home abc</Text>
      <Button title="To Account" onPress={toAccount} />
    </View>
  );
};

export default Home;
