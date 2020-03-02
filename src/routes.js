import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main/index';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            title: 'Utilizadores',
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Repository" component={Repository} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
