import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AddEditCatScreen from '../screens/AddEditCatScreen/AddEditCatScreen';
import CatDetails from '../screens/CatDetails/CatDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'My Cats'}}
        name="MyCatsScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{title: 'Add/Edit Details'}}
        name="AddEditCatScreen"
        component={AddEditCatScreen}
      />
      <Stack.Screen
        options={{title: 'Cat Details'}}
        name="CatDetailsScreen"
        component={CatDetails}
      />
    </Stack.Navigator>
  );
}

export default App;
