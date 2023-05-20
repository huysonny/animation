import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { ROUTES } from './src/routes';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contacts';
import Account from './src/screens/Account';
import { Call, Home3, Information, People } from 'iconsax-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

// const Auth = props => {
//   console.log('auth props', props);
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name={ROUTES.LOGIN}
//         component={props => (
//           <Login setIsLoggedIn={props.setIsLoggedIn} {...props} />
//         )}
//       />
//       <Stack.Screen name={ROUTES.REGISTER} component={Register} />
//     </Stack.Navigator>
//   );
// };
const Auth = ({ setIsLoggedIn }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={props => (
          <Login setIsLoggedIn={setIsLoggedIn} {...props} />
        )}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          tabBarIcon: props => {
            return <Home3 size={props.size} color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.ABOUT}
        component={About}
        options={{
          tabBarIcon: props => {
            return <Information size={props.size} color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.CONTACTS}
        component={Contact}
        options={{
          tabBarIcon: props => {
            return <Call size={props.size} color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.ACCOUNT}
        component={Account}
        options={{
          tabBarIcon: props => {
            return <People size={props.size} color={props.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const getChildren = () => {
  //   if (isLoggedIn) {
  //     return <BottomTab />;
  //   } else {
  //     return <Auth />;
  //   }
  // };

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTab /> : <Auth setIsLoggedIn={setIsLoggedIn} />}
    </NavigationContainer>
  );
};

export default App;
