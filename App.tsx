import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTES } from './src/routes';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contacts';
import Account from './src/screens/Account';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.HOME}>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.ABOUT} component={About} />
        <Stack.Screen name={ROUTES.CONTACTS} component={Contact} />
        <Stack.Screen name={ROUTES.ACCOUNT} component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
