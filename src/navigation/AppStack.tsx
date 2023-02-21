import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AddEditCatScreen from '../screens/AddEditCatScreen/AddEditCatScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'My Cats'}}
        name="MyCatsScreen"
        component={HomeScreen}
      />
      <Stack.Screen name="AddEditCatScreen" component={AddEditCatScreen} />
    </Stack.Navigator>
  );
}

export default App;
