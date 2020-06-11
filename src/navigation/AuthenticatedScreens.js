import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import the sub-stacks or modules
import DashboardScreen from '../modules/Dashboard/DashboardScreen';

const Stack = createStackNavigator();

export const AuthenticatedScreens = () => (
  <Stack.Navigator>
    {/* Register the stack/screen at the navigator */}
    <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
  </Stack.Navigator>
);
