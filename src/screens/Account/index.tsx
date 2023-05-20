import { View, Text, Button } from 'react-native';
import React from 'react';
import { ROUTES } from '../../routes';

const Account = props => {
  const toContact = () => {
    props.navigation.replace(ROUTES.CONTACTS, {
      content: 'Content ne',
    });
  };
  return (
    <View>
      <Text>Account</Text>
      <Button title="To Contact" onPress={toContact} />
    </View>
  );
};

export default Account;
