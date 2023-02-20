import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './AppStack';

function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;
